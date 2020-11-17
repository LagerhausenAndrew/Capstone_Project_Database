'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name:'Corn Hole Boards',
        price: 125,
        description: 'A fun outdoor game for family and friends! Price above will be for an unfinished set. Will stain/paint for an extra 10$',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/106923641_322614822471301_696478670373137384_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=V_PzVUOCnzsAX_eF-9w&_nc_ht=scontent-ort2-1.xx&oh=e7dc900b17635abd8d760769f3932b40&oe=5FD8261F',
        qty: 2
      },
      {
        name:'Outdoor Bench',
        price: 75,
        description: 'A nice outdoor bench for you garden/porch.',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/119993656_389620802437369_7167454882724562443_o.jpg?_nc_cat=104&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8bfeb9&_nc_ohc=hbYqGP9yH9QAX_m2KOg&_nc_ht=scontent-ort2-1.xx&oh=c85d689afab99d415d8313553ccc1b87&oe=5FD6D24A',
        qty: 1
      },
      {
        name:'Charcuterie Board',
        price: 35,
        description: 'Customizable meat and cheese serving trey',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/122085633_411116063621176_2595045329267541198_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=1PC1w2rMa2AAX_AlBvs&_nc_ht=scontent-ort2-1.xx&oh=e0a2da48f62d9fb7c728f7b051e3c764&oe=5FD897E6',
        qty: 15
      },      
      {
        name:'LOVE Wall Sign',
        price: 100,
        description: 'This is a nice home decor sign and shelf.',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/103957178_306960314036752_5501372332976212056_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=rmo2O3jODp8AX8P_erW&_nc_ht=scontent-ort2-1.xx&oh=bb348d614d9d91e6398fb08752bec559&oe=5FD9B233',
        qty: 3
      },      
      {
        name:'Epoxy Resin River Coffee Table',
        price: 250,
        description: 'Epoxy river tables are kind of trendy.',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/72410449_133242858075166_7716615277974126592_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=kSnMmeFocIsAX_iI4nB&_nc_ht=scontent-ort2-1.xx&oh=c5f21ce154347d21a39b64984ade2c11&oe=5FD832AB',
        qty: 0
      },
      {
        name:'Sofa Table',
        price: 175,
        description: 'A nice sofa table for behind your couch.',
        img: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/98214502_286406482758802_658596843583700992_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=2F1ddAE12lYAX-uw8OD&_nc_ht=scontent-ort2-1.xx&oh=a68c50875ef0f980c769adb079c3b324&oe=5FD86BBD',
        qty: 8
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
