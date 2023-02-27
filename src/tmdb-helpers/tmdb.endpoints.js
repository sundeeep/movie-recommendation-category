import tmdbConfig from "./tmdb.config.js";
import axiosGetHelper from "../axios-helpers/axios.getHelper.js";

//Todo: Notes
/**
 * Todo: type = tv, movie
 * Todo: category = 
 */

function tmdbEndPoints(){
    this.getAllList = (type, category, page_number) => tmdbConfig.getUrlPagination(
        `/${type}/${category}`, page_number
    );
    this.getGenreList = (type) => tmdbConfig.getUrl(
        `/genre/${type}/list`
    )
    this.getIndividualDetail = (type, ID) => tmdbConfig.getUrl(
        `/${type}/${ID}`
    );
    this.getIndividualVideos = (type, ID) => tmdbConfig.getUrl(
        `/${type}/${ID}/videos`
    );
    this.getIndividualCredits = (type, ID) => tmdbConfig.getUrl(
        `/${type}/${ID}/credits`
    );
    this.getIndividualImages = (type, ID) => tmdbConfig.getUrl(
        `/${type}/${ID}/images`
    );
    this.getIndividualRecommendations = (type, ID) => tmdbConfig.getUrl(
        `/${type}/${ID}/recommendations`
    );
    this.getCastDetails = (person_id) => tmdbConfig.getUrl(
        `/person/${person_id}`
    );
    this.getCastImages = (person_id) => tmdbConfig.getUrl(
        `/person/${person_id}/combined_credits`
    );
}

const endpointObj = new tmdbEndPoints();

export default function tmdbGetApi(){
    this.getAllList = async (type, category, page_number) => await axiosGetHelper.get(
        endpointObj.getAllList(type, category, page_number)
    );
    this.getGenreList = async (type) => await axiosGetHelper.get(
        endpointObj.getGenreList(type)
    );
    this.getIndividualDetail = async (type, ID) => await axiosGetHelper.get(
        endpointObj.getIndividualDetail(type, ID)
    );
    this.getIndividualCredits = async (type, ID) => await axiosGetHelper.get(
        endpointObj.getIndividualCredits(type, ID)
    );
    this.getIndividualRecommendations = async (type, ID) => await axiosGetHelper.get(
        endpointObj.getIndividualRecommendations(type, ID)
    );
    this.getIndividualVideos = async (type, ID) => await axiosGetHelper.get(
        endpointObj.getIndividualVideos(type, ID)
    );
    this.getIndividualImages = async (type, ID) => await axiosGetHelper.get(
        endpointObj.getIndividualImages(type, ID)
    );
    this.getCastDetails = async (person_id) => await axiosGetHelper.get(
        endpointObj.getCastDetails(person_id)
    );
    this.getCastImages = async (person_id) => await axiosGetHelper.get(
        endpointObj.getCastImages(person_id)
    );
}