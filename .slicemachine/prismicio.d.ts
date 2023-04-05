// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = NavSliceSlice | OpeningImgSlice | AlbumsSlice | AboutSliceSlice | FooterSliceSlice;
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = PhotoGallerySliceSlice | SubTextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | PageDocument;
/**
 * Primary content in AboutSlice → Primary
 *
 */
interface AboutSliceSliceDefaultPrimary {
    /**
     * Title field in *AboutSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: about_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * AboutName field in *AboutSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_slice.primary.aboutname
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    aboutname: prismicT.RichTextField;
    /**
     * Description field in *AboutSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: about_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * AboutImg field in *AboutSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_slice.primary.aboutimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    aboutimg: prismicT.ImageField<never>;
}
/**
 * Default variation for AboutSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *AboutSlice*
 *
 */
type AboutSliceSliceVariation = AboutSliceSliceDefault;
/**
 * AboutSlice Shared Slice
 *
 * - **API ID**: `about_slice`
 * - **Description**: `AboutSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceSlice = prismicT.SharedSlice<"about_slice", AboutSliceSliceVariation>;
/**
 * Primary content in AlbumsSlice → Primary
 *
 */
interface AlbumsSliceDefaultPrimary {
    /**
     * Title field in *AlbumsSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: albums.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *AlbumsSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: albums.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in AlbumsSlice → Items
 *
 */
export interface AlbumsSliceDefaultItem {
    /**
     * Album field in *AlbumsSlice → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: albums.items[].album
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    album: prismicT.ImageField<never>;
}
/**
 * Default variation for AlbumsSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Albums`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AlbumsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AlbumsSliceDefaultPrimary>, Simplify<AlbumsSliceDefaultItem>>;
/**
 * Slice variation for *AlbumsSlice*
 *
 */
type AlbumsSliceVariation = AlbumsSliceDefault;
/**
 * AlbumsSlice Shared Slice
 *
 * - **API ID**: `albums`
 * - **Description**: `Albums`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AlbumsSlice = prismicT.SharedSlice<"albums", AlbumsSliceVariation>;
/**
 * Primary content in FooterSlice → Primary
 *
 */
interface FooterSliceSliceDefaultPrimary {
    /**
     * Title field in *FooterSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: footer_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *FooterSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: footer_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * FooterImage field in *FooterSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_slice.primary.footerimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    footerimage: prismicT.ImageField<never>;
}
/**
 * Default variation for FooterSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FooterSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceSliceDefaultPrimary>, never>;
/**
 * Slice variation for *FooterSlice*
 *
 */
type FooterSliceSliceVariation = FooterSliceSliceDefault;
/**
 * FooterSlice Shared Slice
 *
 * - **API ID**: `footer_slice`
 * - **Description**: `FooterSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceSlice = prismicT.SharedSlice<"footer_slice", FooterSliceSliceVariation>;
/**
 * Primary content in NavSlice → Primary
 *
 */
interface NavSliceSliceDefaultPrimary {
    /**
     * Logo field in *NavSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: nav_slice.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
}
/**
 * Item in NavSlice → Items
 *
 */
export interface NavSliceSliceDefaultItem {
    /**
     * NavLink field in *NavSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: nav_slice.items[].navlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    navlink: prismicT.LinkField;
}
/**
 * Default variation for NavSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavSliceSliceDefaultPrimary>, Simplify<NavSliceSliceDefaultItem>>;
/**
 * Slice variation for *NavSlice*
 *
 */
type NavSliceSliceVariation = NavSliceSliceDefault;
/**
 * NavSlice Shared Slice
 *
 * - **API ID**: `nav_slice`
 * - **Description**: `NavSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavSliceSlice = prismicT.SharedSlice<"nav_slice", NavSliceSliceVariation>;
/**
 * Primary content in OpeningImgSlice → Primary
 *
 */
interface OpeningImgSliceDefaultPrimary {
    /**
     * OpeningImg field in *OpeningImgSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: opening_img.primary.openingimg
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    openingimg: prismicT.ImageField<never>;
}
/**
 * Default variation for OpeningImgSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `OpeningImg`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OpeningImgSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<OpeningImgSliceDefaultPrimary>, never>;
/**
 * Slice variation for *OpeningImgSlice*
 *
 */
type OpeningImgSliceVariation = OpeningImgSliceDefault;
/**
 * OpeningImgSlice Shared Slice
 *
 * - **API ID**: `opening_img`
 * - **Description**: `OpeningImg`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OpeningImgSlice = prismicT.SharedSlice<"opening_img", OpeningImgSliceVariation>;
/**
 * Primary content in PhotoGallerySlice → Primary
 *
 */
interface PhotoGallerySliceSliceDefaultPrimary {
    /**
     * Title field in *PhotoGallerySlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: photo_gallery_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *PhotoGallerySlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: photo_gallery_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in PhotoGallerySlice → Items
 *
 */
export interface PhotoGallerySliceSliceDefaultItem {
    /**
     * Photos field in *PhotoGallerySlice → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: photo_gallery_slice.items[].photos
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photos: prismicT.ImageField<never>;
}
/**
 * Default variation for PhotoGallerySlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PhotoGallerySlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PhotoGallerySliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PhotoGallerySliceSliceDefaultPrimary>, Simplify<PhotoGallerySliceSliceDefaultItem>>;
/**
 * Slice variation for *PhotoGallerySlice*
 *
 */
type PhotoGallerySliceSliceVariation = PhotoGallerySliceSliceDefault;
/**
 * PhotoGallerySlice Shared Slice
 *
 * - **API ID**: `photo_gallery_slice`
 * - **Description**: `PhotoGallerySlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PhotoGallerySliceSlice = prismicT.SharedSlice<"photo_gallery_slice", PhotoGallerySliceSliceVariation>;
/**
 * Primary content in SubText → Primary
 *
 */
interface SubTextSliceDefaultPrimary {
    /**
     * Title field in *SubText → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: sub_text.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *SubText → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: sub_text.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for SubText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SubText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SubTextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SubTextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SubText*
 *
 */
type SubTextSliceVariation = SubTextSliceDefault;
/**
 * SubText Shared Slice
 *
 * - **API ID**: `sub_text`
 * - **Description**: `SubText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SubTextSlice = prismicT.SharedSlice<"sub_text", SubTextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, AboutSliceSliceDefaultPrimary, AboutSliceSliceDefault, AboutSliceSliceVariation, AboutSliceSlice, AlbumsSliceDefaultPrimary, AlbumsSliceDefaultItem, AlbumsSliceDefault, AlbumsSliceVariation, AlbumsSlice, FooterSliceSliceDefaultPrimary, FooterSliceSliceDefault, FooterSliceSliceVariation, FooterSliceSlice, NavSliceSliceDefaultPrimary, NavSliceSliceDefaultItem, NavSliceSliceDefault, NavSliceSliceVariation, NavSliceSlice, OpeningImgSliceDefaultPrimary, OpeningImgSliceDefault, OpeningImgSliceVariation, OpeningImgSlice, PhotoGallerySliceSliceDefaultPrimary, PhotoGallerySliceSliceDefaultItem, PhotoGallerySliceSliceDefault, PhotoGallerySliceSliceVariation, PhotoGallerySliceSlice, SubTextSliceDefaultPrimary, SubTextSliceDefault, SubTextSliceVariation, SubTextSlice };
    }
}
