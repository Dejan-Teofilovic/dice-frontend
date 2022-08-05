export const ROUTES = [
  {
    id: 1,
    name: 'Explore Dice',
    path: '/explore-dice',
    visible: true
  },
  {
    id: 2,
    name: 'FAQ',
    path: '/faq',
    visible: true
  },
  {
    id: 3,
    name: 'My NFTs',
    path: '/my-nfts',
    visible: false
  }
];
export const FAQ = [
  {
    id: 1,
    question: 'Why is there a waitlist?',
    answer: "Since each figure is handcrafted, it takes time to create. You can be assured that we'll offer you a reasonable wait time, and keep you informed every step of the way."
  },
  {
    id: 3,
    question: 'Assume you accept ETH only?',
    answer: 'Yes, that is correct.'
  },
  {
    id: 4,
    question: 'What is the wait time for a handcrafted / 3D printed figure?',
    answer: 'Handcrafted Wooden Figures take 4-10 weeks to complete, and 3D Printed Figures take between 3-8 weeks.'
  },
  {
    id: 5,
    question: 'Is there a way to reduce the wait time?',
    answer: 'A premium feature with more customized settings and a shorter wait time will soon be available. Stay tuned!'
  },
  {
    id: 2,
    question: 'How much do the figures cost?',
    answer: 'The Handcrafted Wooden Figure costs 1 ETH (including shipping), while the 3D Printed Figure costs 0.7 ETH.'
  },
  {
    id: 6,
    question: 'Is shipping and delivery included in the final cost?',
    answer: 'The cost includes shipping and delivery via FedEx or DHL or other courier service depending on location.'
  },
  {
    id: 7,
    question: 'Do you only work with NFT Avatars? What about my other NFTs?',
    answer: "We only work with NFT Avatars, unfortunately. However, we're brainstorming new ways to bring other NFTs to life."
  },
  {
    id: 8,
    question: 'Can I customize the size of my figure?',
    answer: 'Not right now. However, it will be included in our premium feature.'
  },
  {
    id: 9,
    question: 'What if I have more questions?',
    answer: 'Email us at dice@dice-nft.com'
  }
];

// Chain infos
// export const CHAIN_ID = 4;
// export const CHAIN_NAME = 'Rinkeby Test Network';
// export const RPC_URLS = ['https://rinkeby.infura.io/v3/'];
// export const BLOCK_EXPLORER_URLS = ['https://rinkeby.etherscan.io'];
// export const NATIVE_CURRENCY_NAME = 'ETH';
// export const NATIVE_CURRENCY_SYMBOL = 'ETH';
// export const DECIMALS = 18;

export const CHAIN_ID = 1;
export const CHAIN_NAME = 'Ethereum Mainnet';
export const RPC_URLS = ['https://mainnet.infura.io/v3/'];
export const BLOCK_EXPLORER_URLS = ['https://etherscan.io'];
export const NATIVE_CURRENCY_NAME = 'ETH';
export const NATIVE_CURRENCY_SYMBOL = 'ETH';
export const DECIMALS = 18;

export const NO_ETHEREUM_OBJECT = /No Ethereum provider was found on window.ethereum/;

export const SUCCESS = 'success';
export const INFO = 'info';
export const ERROR = 'error';
export const WARNING = 'warning';
export const SWITCH_ERROR_CODE = 4902;

//  Fonts
export const FONT_VARELA = "'Varela Round', sans-serif";
export const FONT_IBM_PLEX = "'IBM Plex Sans', sans-serif";
export const FONT_IBM_PLEX_SERIF = "'IBM Plex Serif', serif";
export const FONT_SANS_PRO = "'Source Sans Pro', sans-serif";
export const FONT_PRIMARY = 'sfProRounded';

//  Animations
export const varFadeInUp = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInDown = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInLeft = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};
export const varFadeInRight = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

//  Colors
export const COLOR_BRIGHT = 'white';
export const COLOR_INFO = '#005d76';
export const COLOR_PRIMARY = '#A1275D';
export const COLOR_SECONDARY = '#9DB7BD';

export const API_TO_GET_NFTS = 'https://testnets-api.opensea.io/api/v1/assets';

export const MESSAGE_ORDER_CREATE_SUCCESS = 'Your order has been registered.';
export const MESSAGE_ORDER_UPDATE_SUCCESS = 'Your order has been updated.';
export const MESSAGE_FAILED = 'Sorry. Your operation was failed. Try again, please.';