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

export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-ha-product",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "description",
      "slug",
      "c_image",
      "c_shortDescriptionV2",
      "shortDescriptionV2",
      "bodyV2",
      "richTextDescriptionV2",
      "primaryPhoto",
      "taxonomy_relatedConditions.name",
      "taxonomy_relatedConditions.headshot",
      "taxonomy_relatedConditions.address",
      "taxonomy_relatedConditions.mainPhone",
      "taxonomy_relatedConditions.meta",
      "taxonomy_relatedConditions.slug",
      "taxonomy_relatedConditions.id",
      "c_relatedProfessionals.taxonomy_relatedConditions.id",
      "c_relatedProfessionals.taxonomy_relatedConditions.name",
      "c_relatedProfessionals.taxonomy_relatedConditions.primaryPhoto",
      "c_relatedProfessionals.taxonomy_relatedConditions.emails",
      "c_relatedProfessionals.taxonomy_relatedConditions.bodyV2",
      "c_relatedProfessionals.taxonomy_relatedConditions.slug",
      "c_relatedProfessionals.taxonomy_relatedConditions.datePosted",
      "taxonomy_relatedConditions.name",
      "taxonomy_relatedConditions.bodyV2",
      "taxonomy_relatedConditions.shortDescriptionV2",
      "taxonomy_relatedConditions.primaryPhoto",
      "taxonomy_relatedConditions.c_author",
      "taxonomy_relatedConditions.datePosted",
      "taxonomy_relatedConditions.slug",
      "parentProduct.name",
      "parentProduct.slug",
      "parentProduct.primaryPhoto",
      "parentProduct.id",
      "parentProduct.c_shortDescriptionV2",
      "parentProduct.meta",
      "datePosted",
      "c_parentEntityType",
      "c_category",
      "closed"
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

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
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

 

 
 
  return (
    <PageLayout _site={_site} templateData={{ __meta, document }}>
      {/* Closed Banner */}
      {closed && (
        <section className="w-full bg-tertiary">
          <article className="centered-container !py-0">
            <p className="flex text-base  items-center  h-20 md:h-14 my-auto text-white">
              <IoWarningOutline className="h-6 w-6 md:h-4 md:w-4 mr-4" />
              This location is temporarily closed due to inclement weather.
            </p>
          </article>
        </section>
      )}
      <AnnouncementBanner isVisibleByDefault={true} position="left" />



      {/* About Section */}
      <section className="centered-container">
        <section className="flex flex-col md:h-[400px] md:flex-row md:justify-between gap-8 md:gap-16">
          {/* <Image
            image={primaryPhoto[0]}
            className="w-full md:!w-1/2 max-w-none"
          /> */}
          <article className="flex flex-col w-full md:w-1/2 gap-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              About {name}
            </h2>
             (
              <ResponseComponent response={richTextDescriptionV2} />
            )
            
            <nav className="flex flex-col md:flex-row gap-4">
              <button className="font-bold md:text-lg bg-secondary text-white w-full md:w-fit p-2  md:px-4 flex items-center justify-center border rounded-full">
                Get Directions
              </button>
              <button className="border-2 font-bold text-secondary border-secondary md:text-lg w-full md:w-fit p-2  md:px-4 flex items-center justify-center rounded-full">
                Call us
              </button>
            </nav>
          </article>
        </section>
      </section>




      {/* <article className="centered-container !py-4 hidden md:block">
        <BreadCrumbs
          data={dm_directoryParents_hc_hf_directory}
          currAddress={address.line1}
        />
      </article> */}
      <article
        className={` ${meta.entityType.id === "product" ? `bg-primary` : `bg-accent`
          }`}
      >
        <section
          className="centered-container flex gap-4 md:gap-8 flex-col md:flex-row justify-between text-left !space-y-0 !py-2 w-full md:!px-40"
          aria-labelledby="main-content-heading"
        >
          <aside
            className=" w-full md:w-4/5 ml-0 !text-lg flex flex-col gap-4 rounded-xl"
            aria-label="Contact Information"
          >
            <header>
              <h2
                id="main-content-heading"
                className="text-2xl md:text-4xl font-bold "
              >
                {name}
              </h2>
            </header>
            <article className="text-lg space-y-2">
              <ResponseComponent
                response={c_shortDescriptionV2 || shortDescriptionV2}
              />
            </article>
          </aside>
          <footer className="self-center md:flex md:justify-end w-full md:w-1/5">
            <Cta
              cta={{ link: "", linkType: "Phone", label: "Call us" }}
              ctaType={"secondaryCta"}
              otherStyles={"rounded-full md:!w-3/4 no-underline"}
            />
          </footer>
        </section>
        <section className="centered-container !py-4 md:relative mx-auto">
          {/* <Image
            image={c_image || primaryPhoto}
            className="md:max-h-[500px] w-full rounded-lg"
          /> */}
          <section
            className={`md:rounded-t-lg md:bg-primary md:relative md:-top-48 gap-2 md:gap-8 md:mx-8 justify-between m-auto text-pretty font-medium 
        text-sm sm:text-xl/8 py-2 md:py-8 lg:py-2 flex flex-col md:flex-row md:px-8`}
            aria-labelledby="content-section-heading"
          >
            <header
              className={`${taxonomy_relatedConditions || parentProduct ? `md:!w-4/5` : `md:w-full`
                } flex flex-col prose !max-w-none w-full`}
            >
              <section
                className="flex flex-wrap gap-1 items-center md:gap-4 text-sm md:text-base -mb-12"
                aria-label="Meta Information"
              >
                {datePosted && <p>{format_date(datePosted)}</p>}
                {c_parentEntityType && (
                  <span className="rounded-full border p-1 px-2 bg-red-200">
                    {c_parentEntityType}
                  </span>
                )}
                {c_category && (
                  <span className="rounded-full border p-1 px-2 bg-gray-300">
                    {c_category}
                  </span>
                )}
              </section>




              <footer className="md:pb-6 hidden md:block ">
                <Cta
                  cta={{ link: "", linkType: "Phone", label: "Call us" }}
                  ctaType={"secondaryCta"}
                  otherStyles={"rounded-full md:!w-1/2 no-underline"}
                />
              </footer>
            </header>


            <aside className="w-full md:w-1/5 flex flex-col gap-2  mt-2">
              {parentProduct && (
                <RelatedData
                  type={"parent_product"}
                  relatedData={parentProduct}
                  name={name}
                />
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
      <ScrollToTop />
    </PageLayout>
  );
};

export default Speciality;
