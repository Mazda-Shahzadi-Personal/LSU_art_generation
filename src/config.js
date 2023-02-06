const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

//For layers and hastages. Blue#20 red#2. mean 2/22*100 == 9% chance being red. 

// General metadata for Ethereum
const namePrefix = "Love Story Unicorns";
const description = "Demo for Love Story Unicorns NFT launch.";
const baseUri = "ipfs://Qma1vPKzKGmms6hmgSiozK7Rs5z8wtxGiekg4GvxyGDMLa"; //need to update

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  
  {
    growEditionSizeTo: 50, // how many nft's to make 
    layersOrder: [ // tells order of layer important for image. Make sure in layer folder has exact same name.
      { name: "B1 Background" },
      { name: "B1 Body" },
      { name: "B1 Face" },
      { name: "B1 Hair" },
      { name: "B1 Hooves" },
      { name: "B1 Horns" },
      { name: "B1 Accessories" },
      
    ], // can have differnent generation parts e.g. with gold eye lid. but growEditionSizeTo should be increasing e.g. generatoin 1 = 10, generation 2 hosuld = > 10.
  },
  {
    growEditionSizeTo: 100, // how many nft's to make 
    layersOrder: [ // tells order of layer important for image. Make sure in layer folder has exact same name.
      { name: "B2 Background" },
      { name: "B2 Body" },
      { name: "B2 Face" },
      { name: "B2 Hair" },
      { name: "B2 Hooves" },
      { name: "B2 Horns" },
      { name: "B2 Accessories" },
      
    ], // can have differnent generation parts e.g. with gold eye lid. but growEditionSizeTo should be increasing e.g. generatoin 1 = 10, generation 2 hosuld = > 10.
  },
  // {
  //   growEditionSizeTo: 50, // makes 30
  //   layersOrder: [ // tells order of layer important for image. Make sure in layer folder has exact same name.
  //     { name: "1 Background" },
  //     { name: "2 Unicorn Body" },
  //     { name: "3 Face" },
  //     { name: "4 Mane and Tail" },
  //     { name: "5 Hooves" },
  //     { name: "6 Horns" },
  //     { name: "7 Unicorn Accessories" },
      
  //   ], 
  // },
];

const shuffleLayerConfigurations = false; // changes order of images created in build file.

const debugLogs = false; // to get more information when create image build

const format = { //controll size on images for nft's
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = { //create random background layer for image. not needed.
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = { };//adds extra meta data to all nft's. e.g. artist: "Mazda"


const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
