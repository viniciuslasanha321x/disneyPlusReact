import { ISeriesMovies } from '../components/MovieAndSeriePage';

interface ILinkImage {
  link: string;
  img: string;
}

export interface IWanda {
  backgroundImage: string;
  filmLogo: string;
  genreMoviesAndClassifications: string;
  infoMovie: string;
  titlefilm: string;
  filmSummary: string;
  releaseDateInformation: string;
  genreInformation: string;
  classificationInformation: string;
  producers: string[];
}

export interface IServer {
  slides: ILinkImage[];
  categoriesfilms: string[];
  categorieseries: string[];
  recommendedtendenciesimagesdashboard: ILinkImage[];
  newsatdisneyplusimagesdashboard: ILinkImage[];
  originaldashboardimages: ILinkImage[];
  oscarwinnerimagesdashboard: ILinkImage[];
  wandavisionInformations: ISeriesMovies;
  sportsimagesdashboard: ILinkImage[];
  pictureinspiredbybooksdashboard: ILinkImage[];
  actionandadventureimagesdashboard: ILinkImage[];
  imagesmusicanddancedashboard: ILinkImage[];
  protagonistwomenimagesdashboard: ILinkImage[];
  routesuggestionpartone: string[];
  routesuggestionparttwo: string[];
}

interface PropsTabMovie {
  // children: React.ReactNode;
  titleFilm: string;
  filmSummary: string;
  releaseDateInformation: string;
  genreInformation: string;
  classificationInformation: string;
  producers: string[];
  slideMoviePartOne: Array<{
    img: string;
    link: string;
  }>;
  slideMoviePartTwo: Array<{
    img: string;
    link: string;
  }>;
  slideMoviePartThree: Array<{
    img: string;
    link: string;
  }>;
  disableEpisodies?: boolean;
}

export const Server: IServer = {
  slides: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50917191056_df03ecf67a_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50917191026_15af423314_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50917191001_403a6e18e5_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50917334022_982127cfac_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50856700607_ff3dac74ae_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50855885373_e509040aa6_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50856700537_c715562d11_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50917212916_1dae9a514f_h.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50856700762_9f8688b849_h.jpg',
    },
  ],
  categoriesfilms: [
    'Destaques',
    'Outros Filmes A/Z',
    'Filmes',
    'Animação',
    'Comédia',
    'Documentário',
    'Drama',
    'Crianças',
    'Ultra HD E HDR',
  ],
  categorieseries: [
    'Destaques',
    'Todas As Séries',
    'Ação/Ventura',
    'Animação',
    'Comédia',
    'Docusséries',
    'Infantis',
  ],
  recommendedtendenciesimagesdashboard: [
    {
      link: 'wandavision-page-film',
      img: 'https://live.staticflickr.com/65535/51062979341_5b1f24b50b_m.jpg',
    },
    {
      link: 'wandavision-page-film',
      img: 'https://live.staticflickr.com/65535/51063065127_71cbdf6fd9_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062269898_553e6aa60f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062270633_019b961bc7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063068927_8b691e3b8c_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063070942_3d5203a290_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062342823_a22d2f775f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063141762_13c2a5bddf_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062343293_5a011a898e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063071772_ff39cdc534_m.jpg',
    },
    {
      link: 'wandavision-page-film',
      img: 'https://live.staticflickr.com/65535/51063072732_5e21ffb61b_m.jpg',
    },
    {
      link: 'wandavision-page-film',
      img: 'https://live.staticflickr.com/65535/51062276138_f4224ef39d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062989336_34ae2f0fba_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063077287_119f4bf6b7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063078437_6c616d4c9d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063080107_cea04d6878_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063081082_566b342be5_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062285028_6d608400ba_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062286903_4c886e8936_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063000146_f54d2ed556_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063000921_b8e93c9fd2_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062289523_a8b97d9502_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063002801_038d7baf1d_m.jpg',
    },
  ],
  newsatdisneyplusimagesdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066821071_d5a579296b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063080107_cea04d6878_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066157728_e851dc837e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997634050_c61a26253f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066824901_b2aea3bd38_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066119153_1a03fa3950_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066827306_05fd08a297_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066923227_2092905a6a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066828596_80260f4b6f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066829566_72f8ff7355_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066925627_4601927909_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066926247_96d03c5354_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066126058_3b24ebeb4b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066927872_8b62d6ceab_m.jpg',
    },
  ],
  originaldashboardimages: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066233638_5ce6de33d0_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067035182_a9c58351df_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997751255_8cabf7e04f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997751815_161a59efa7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066234528_afa6d0fd47_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063141762_13c2a5bddf_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066974111_e8ec4e93dd_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067092372_4a983cb5c1_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063080107_cea04d6878_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997784135_84cb094276_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067071152_91907d0d0b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066977256_2d08058713_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997787300_98dddda411_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066927872_8b62d6ceab_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067073077_bc94773345_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066273408_1a35b0471b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067074942_7685fafb2d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066273688_3260dfda3c_m.jpg',
    },
  ],
  oscarwinnerimagesdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067036956_b1df822afc_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062989336_34ae2f0fba_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067132162_3e11bfdd24_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062343293_5a011a898e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067037116_9e4655ec09_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066334503_06bbd938dc_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067136407_c892706ae7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066334768_acb3d3ec45_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067041856_b880b65fc4_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067047136_c6e173956a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066340993_78bd1711d3_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066341098_9896f00c8f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063072732_5e21ffb61b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066343738_4aace13d50_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066375618_72d86a9a68_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067054031_a41c79109b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066348063_5c6883b109_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067054531_4a658c9827_m.jpg',
    },
  ],
  sportsimagesdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066404168_ae2dbd6328_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066404278_0c6bbeb902_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067110466_5e87202922_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066407748_8e298717eb_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997924290_1cbecb63cb_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066407943_22d75b6a4f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066408018_1f70b0f066_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066411153_6c553c44df_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067212687_6a6e6dae95_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067117366_0f3c393b7d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067120816_7f1b2bcc4f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067074942_7685fafb2d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067121116_0054092514_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067121311_14e87f3457_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997935050_cbc78e45f4_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067219377_a866b0ebdf_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067219522_a0e3d65172_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066419733_b8da0c9392_m.jpg',
    },
  ],
  pictureinspiredbybooksdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997982195_3d610cc25d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066464918_1d5a23c1b8_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066464958_200fac2a61_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066469318_345b2148a8_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066233638_5ce6de33d0_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067174356_d96b7f0f3a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067054531_4a658c9827_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997986565_d8e1e03a8f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997987195_afe3b8a418_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067092372_4a983cb5c1_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997988850_a2dc6a47fc_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067272162_a153c900f6_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997989050_c857bd14d4_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997992190_3c89caa417_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067275232_037aefda6c_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997992330_42a1d7aa01_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50997993690_140ece69c8_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066476148_fdf9b6d58d_m.jpg',
    },
  ],
  actionandadventureimagesdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062286903_4c886e8936_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998587200_f8dbc3e504_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062979341_5b1f24b50b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062276138_f4224ef39d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067868052_6c1fe1478e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062342823_a22d2f775f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067871112_9b9f029031_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067036956_b1df822afc_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063141762_13c2a5bddf_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066974111_e8ec4e93dd_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998594395_1b12bea53d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067780296_a6656f2e08_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066334768_acb3d3ec45_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998594625_170c3f9849_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998595135_48680e795a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063065127_71cbdf6fd9_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067880817_90762458a8_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067880902_990a1516d9_m.jpg',
    },
  ],
  imagesmusicanddancedashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067097303_3ca98ccc50_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067797821_5b10fb580e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066119153_1a03fa3950_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066829566_72f8ff7355_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067892737_b13f5a1ce3_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067901007_1a39812d9d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067092372_4a983cb5c1_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067901422_abc449405a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998620365_0df7bb1662_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067105983_f77ace9c13_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066464958_200fac2a61_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066273408_1a35b0471b_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51066828596_80260f4b6f_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067113343_2486d38719_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067113423_d09779385d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067035182_a9c58351df_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067117088_d8474407a2_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998632105_7587dc2562_m.jpg',
    },
  ],
  protagonistwomenimagesdashboard: [
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067828516_60fb338565_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067923422_2d7aa635da_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067127658_8494e4b3c6_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067127848_ce55129684_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062285028_6d608400ba_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51063065127_71cbdf6fd9_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067834461_151bafd50a_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998648580_83d465ced0_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067133718_a060a782f5_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067834846_173fc8eb2c_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998654560_f847577ef2_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51062270633_019b961bc7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998654620_2eb25fa0d1_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067901007_1a39812d9d_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067941857_3b8a99e44e_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067941932_88048a9bc2_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/51067146943_9267153fb7_m.jpg',
    },
    {
      link: 'series',
      img: 'https://live.staticflickr.com/65535/50998662300_d24ba643c9_m.jpg',
    },
  ],
  routesuggestionpartone: [
    'https://live.staticflickr.com/65535/51030440171_412b318781_m.jpg',
    'https://live.staticflickr.com/65535/51030440146_dbac89c2c7_m.jpg',
    'https://live.staticflickr.com/65535/51030454051_f457f4911d_m.jpg',
    'https://live.staticflickr.com/65535/51029712268_100a2ebef4_m.jpg',
    'https://live.staticflickr.com/65535/51036401042_3e964ca4ab_m.jpg',
    'https://live.staticflickr.com/65535/51030440171_412b318781_m.jpg',
    'https://live.staticflickr.com/65535/51030440146_dbac89c2c7_m.jpg',
    'https://live.staticflickr.com/65535/51030454051_f457f4911d_m.jpg',
    'https://live.staticflickr.com/65535/51029712268_100a2ebef4_m.jpg',
    'https://live.staticflickr.com/65535/51036401042_3e964ca4ab_m.jpg',
  ],
  routesuggestionparttwo: [
    'https://live.staticflickr.com/65535/51030440211_4a1a3f25fe_m.jpg',
    'https://live.staticflickr.com/65535/51030440271_7586c6214e_m.jpg',
    'https://live.staticflickr.com/65535/51030541972_dc8d52685b_m.jpg',
    'https://live.staticflickr.com/65535/51030541912_5b7e1fcdc5_m.jpg',
    'https://live.staticflickr.com/65535/51030440256_a94407256a_m.jpg',
    'https://live.staticflickr.com/65535/51030440171_412b318781_m.jpg',
    'https://live.staticflickr.com/65535/51030440146_dbac89c2c7_m.jpg',
    'https://live.staticflickr.com/65535/51030454051_f457f4911d_m.jpg',
    'https://live.staticflickr.com/65535/51029712268_100a2ebef4_m.jpg',
    'https://live.staticflickr.com/65535/51036401042_3e964ca4ab_m.jpg',
  ],
  wandavisionInformations: {
    backgroundImage:
      'https://live.staticflickr.com/65535/51078282638_5e8f0a7ff1_m.jpg',

    filmLogo:
      'https://live.staticflickr.com/65535/51078285998_ce4cfbcb5b_m.jpg',
    genreMoviesAndClassifications:
      '2021 • 1 temporada • Romance, Mistério, Drama, Ficção científica',
    infoMovie:
      'A nova série da Marvel Studios “WandaVision” combina o estilo das comédias clássicas com o Universo Cinematográfico da Marvel para contar a história de Wanda Maximoff (Elizabeth Olsen) e Visão (Paul Bettany), um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece. Com direção de Matt Shakman e roteiro de Jac Schaeffer.',
    titlefilm: 'wandavision',
    filmSummary:
      'A série da Marvel Studios “WandaVision” combina o estilo das comédias clássicas com o Universo Cinematográfico da Marvel para contar a história de Wanda Maximoff (Elizabeth Olsen) e Visão (Paul Bettany), um casal de super-heróis com uma vida perfeita, que começa a suspeitar que nem tudo é o que parece. Com direção de Matt Shakman e roteiro de Jac Schaeffer.',
    releaseDateInformation: '2021',
    genreInformation: 'Romance, Mistério, Drama, Ficção cientifica',
    classificationInformation:
      'https://live.staticflickr.com/65535/51078299653_3350608a26_t.jpg',
    producers: [
      'Elizabeth Ocean',
      'Paul Bettany',
      'Teynoah Parris',
      'Kathryn Hahn',
      'Randall Park',
      'Kat Dennings',
    ],
  },
};
