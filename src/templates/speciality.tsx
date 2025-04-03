/**************************************************************
 * 🔽 IMPORTS
 **************************************************************/

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";

import PageLayout from "../components/pageLayout";
import { Image } from "@yext/pages-components";
import { IoWarningOutline } from "react-icons/io5";
import Cta from "../components/cta";
import ResponseComponent from "../components/ResponseComponent";
import RelatedData from "../components/relatedData";
import { format_date } from "../utils/reusableFunctions";
import BreadCrumbs from "../components/breadCrumbs";
import ScrollToTop from "../components/scrollToTop";
import AnnouncementBanner from "../components/AnnouncementComponent/Announcement";
import Blogs from "../components/relatedSections/Blogs";


/**************************************************************
 * 🔽 STREAM CONFIGURATION
 **************************************************************/

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-ha-product",
    fields: [
      "id", "uid", "meta", "name", "address", "description", "slug", "c_image",
      "c_shortDescriptionV2", "shortDescriptionV2", "bodyV2", "richTextDescriptionV2",
      "primaryPhoto", "taxonomy_relatedConditions.name", "taxonomy_relatedConditions.headshot",
      "taxonomy_relatedConditions.address", "taxonomy_relatedConditions.mainPhone",
      "taxonomy_relatedConditions.meta", "taxonomy_relatedConditions.slug",
      "taxonomy_relatedConditions.id", "c_relatedProfessionals.taxonomy_relatedConditions.id",
      "c_relatedProfessionals.taxonomy_relatedConditions.name",
      "c_relatedProfessionals.taxonomy_relatedConditions.primaryPhoto",
      "c_relatedProfessionals.taxonomy_relatedConditions.emails",
      "c_relatedProfessionals.taxonomy_relatedConditions.bodyV2",
      "c_relatedProfessionals.taxonomy_relatedConditions.slug",
      "c_relatedProfessionals.taxonomy_relatedConditions.datePosted",
      "taxonomy_relatedConditions.bodyV2", "taxonomy_relatedConditions.shortDescriptionV2",
      "taxonomy_relatedConditions.primaryPhoto", "taxonomy_relatedConditions.c_author",
      "taxonomy_relatedConditions.datePosted", "parentProduct.name", "parentProduct.slug",
      "parentProduct.primaryPhoto", "parentProduct.id", "parentProduct.c_shortDescriptionV2",
      "parentProduct.meta", "datePosted", "c_parentEntityType", "c_category", "closed"
    ],
    filter: {
      entityTypes: ["taxonomy_specialty"],
      savedFilterIds: ["1401364440"],
    },
    localization: {
      locales: ["en"],
    },
  },
};


/**************************************************************
 * 🔽 URL PATH GENERATION
 **************************************************************/

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? `specialty/${document.slug}`
    : `${document.locale}/${document.address.region}/${document.address.city}/${document.address.line1}-${document.id.toString()}`;
};


/**************************************************************
 * 🔽 REDIRECTS
 **************************************************************/

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};


/**************************************************************
 * 🔽 HEAD CONFIGURATION
 **************************************************************/

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (): HeadConfig => {
  return {
    title: "HC | Speciality Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "richTextDescriptionV2",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};


/**************************************************************
 * 🔽 MAIN TEMPLATE COMPONENT
 **************************************************************/

const Speciality: Template<TemplateRenderProps> = ({ document }) => {
  const {
    __meta,
    _site,
    name,
    c_image,
    c_shortDescriptionV2,
    bodyV2,
    richTextDescriptionV2,
    primaryPhoto,
    shortDescriptionV2,
    meta,
    slug,
    taxonomy_relatedConditions,
    parentProduct,
    datePosted,
    c_parentEntityType,
    c_category,
    closed,
    address,
    description,
  } = document;

  // 🔄 Replace this later with CMS-related blogs field like: document.c_relatedBlogs
  const relatedBlogs = [
    {
      name: "Understanding Preventive Care",
      c_image: {
        url: "https://via.placeholder.com/400x200",
        alternateText: "Preventive Care",
      },
      richTextDescriptionV2: "<p>This article explores how preventive care saves lives.</p>",
      primaryCTA: {
        link: "/blogs/preventive-care",
        label: "Learn More",
      },
    },
    {
      name: "5 Tips for Family Health",
      c_image: {
        url: "https://via.placeholder.com/400x200",
        alternateText: "Family Health",
      },
      richTextDescriptionV2: "<p>Simple lifestyle changes for a healthier family.</p>",
      primaryCTA: {
        link: "/blogs/family-health-tips",
        label: "Learn More",
      },
    },
    {
      name: "Benefits of Regular Checkups",
      c_image: {
        url: "https://via.placeholder.com/400x200",
        alternateText: "Regular Checkups",
      },
      richTextDescriptionV2: "<p>Why seeing your doctor annually matters more than you think.</p>",
      primaryCTA: {
        link: "/blogs/checkup-benefits",
        label: "Learn More",
      },
    },
  ];

  return (
    <PageLayout _site={_site} templateData={{ __meta, document }}>
      {/* 🚫 Closed Banner */}
      {closed && (
        <section className="w-full bg-tertiary">
          <article className="centered-container !py-0">
            <p className="flex text-base items-center h-20 md:h-14 my-auto text-white">
              <IoWarningOutline className="h-6 w-6 md:h-4 md:w-4 mr-4" />
              This location is temporarily closed due to inclement weather.
            </p>
          </article>
        </section>
      )}

      <AnnouncementBanner isVisibleByDefault={true} position="left" />

      {/* 📌 About Section */}
      <section className="centered-container">
        <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <article className="flex flex-col w-full md:w-1/2 gap-6 self-start">
            <h2 className="text-2xl md:text-4xl font-bold">About {name}</h2>
            <ResponseComponent response={richTextDescriptionV2} />

            <div className="mt-4 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row w-full">
              <button className="font-bold md:text-lg bg-secondary text-white w-full md:w-auto p-3 px-6 flex items-center justify-center border rounded-full">
                Get Directions
              </button>
              <button className="border-2 font-bold text-secondary border-secondary md:text-lg w-full md:w-auto p-3 px-6 flex items-center justify-center rounded-full">
                Call us
              </button>
            </div>
          </article>

          {primaryPhoto && (
            <figure className="w-full md:w-1/2">
              <Image
                image={primaryPhoto}
                className="rounded-xl w-full max-h-[400px] object-cover"
                //alt={`Visual representation of ${name}`}
              />
            </figure>
          )}
        </section>
      </section>

      {/* 📂 Main Info Section */}
      <article className={` ${meta.entityType.id === "product" ? `bg-primary` : `bg-accent`}`}>
        <section
          className="centered-container flex gap-4 md:gap-8 flex-col md:flex-row justify-between text-left !space-y-0 !py-2 w-full md:!px-40"
          aria-labelledby="main-content-heading"
        >
          <aside className="w-full md:w-4/5 ml-0 !text-lg flex flex-col gap-4 rounded-xl">
            <header>
              <h2 id="main-content-heading" className="text-2xl md:text-4xl font-bold ">
                {name}
              </h2>
            </header>
            <article className="text-lg space-y-2">
              <ResponseComponent response={c_shortDescriptionV2 || shortDescriptionV2} />
            </article>
          </aside>
        </section>

        {/* 🧩 Meta Info + Related */}
        <section className="centered-container !py-4 md:relative mx-auto">
          <section
            className={`md:rounded-t-lg md:bg-primary md:relative md:-top-48 gap-2 md:gap-8 md:mx-8 justify-between m-auto text-pretty font-medium 
            text-sm sm:text-xl/8 py-2 md:py-8 lg:py-2 flex flex-col md:flex-row md:px-8`}
            aria-labelledby="content-section-heading"
          >
            <header
              className={`${
                taxonomy_relatedConditions || parentProduct ? `md:!w-4/5` : `md:w-full`
              } flex flex-col prose !max-w-none w-full`}
            >
              <section className="flex flex-wrap gap-1 items-center md:gap-4 text-sm md:text-base -mb-12">
                {datePosted && <p>{format_date(datePosted)}</p>}
                {c_parentEntityType && (
                  <span className="rounded-full border p-1 px-2 bg-red-200">
                    {c_parentEntityType}
                  </span>
                )}
                {c_category && (
                  <span className="rounded-full border p-1 px-2 bg-gray-300">{c_category}</span>
                )}
              </section>

              <footer className="md:pb-6 hidden md:block">
                <Cta
                  cta={{ link: "", linkType: "Phone", label: "Call us" }}
                  ctaType={"secondaryCta"}
                  otherStyles={"rounded-full md:!w-1/2 no-underline"}
                />
              </footer>
            </header>

            <aside className="w-full md:w-1/5 flex flex-col gap-2 mt-2">
              {parentProduct && (
                <RelatedData type={"parent_product"} relatedData={parentProduct} name={name} />
              )}
              {taxonomy_relatedConditions && (
                <RelatedData relatedData={taxonomy_relatedConditions} name={name} />
              )}
            </aside>

            <footer className="md:pb-6 md:hidden block">
              <Cta
                cta={{ link: "", linkType: "Phone", label: "Call us" }}
                ctaType={"secondaryCta"}
                otherStyles={"rounded-full"}
              />
            </footer>
          </section>
        </section>
      </article>

      {/* 📚 Articles Section */}
      {relatedBlogs && relatedBlogs.length > 0 && (
        <section className="bg-gray-100 py-10">
          <div className="centered-container">
            <header className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Articles</h2>
              <a
                href="/blogs"
                className="text-sm bg-primary text-white font-semibold px-4 py-2 rounded-full"
              >
                Find More
              </a>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
                >
                  {primaryPhoto ? (
                    <Image
                      image={primaryPhoto}
                      className="w-full h-40 object-cover rounded-md mb-4"
                      //alt={name}
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold mb-2">{name}</h3>

                  <div className="text-sm text-gray-600 mb-4">
                    <ResponseComponent response={shortDescriptionV2} />
                  </div>

                  <a
                    href={blog.primaryCTA?.link || "#"}
                    className="text-white bg-primary px-4 py-2 text-sm rounded-full w-fit self-start hover:bg-primary/90"
                  >
                    {blog.primaryCTA?.label || "Learn More"}
                  </a>
                </article>
              ))}
            </section>
          </div>
        </section>
      )}

      {/* ⬆️ Scroll To Top */}
      <ScrollToTop />
    </PageLayout>
  );
};

export default Speciality;
