const data = [
  {
    name: '青年一期',
    modelUrl: '/model/I.gltf',
    color: [223, 141, 96],
    scale: 80,
    coordinates: [121.50297, 25.01998],
    region: [
      [121.502848712118, 25.01991272969339],
      [121.50320786039424, 25.01951019825249],
      [121.50381370680171, 25.0198107241803],
      [121.5040459666029, 25.019941378140285],
      [121.50339905212492, 25.02041490301416]
    ],
  },
  {
    name: '青年二期',
    modelUrl: '/model/L.gltf',
    color: [114, 181, 111],
    scale: 80,
    coordinates: [121.5029, 25.02000],
    region: [
      [121.50280983151528, 25.02063207711166],
      [121.5022093161521, 25.020024517095028],
      [121.50257942260826, 25.01975567337431],
      [121.5032390905545, 25.0203424295121]
    ],
  },
  // {
  //   name: '信義區廣慈博愛園區(A基地)-行政大樓',
  //   modelUrl: '/model/base.gltf',
  //   color: [116, 199, 241],
  //   scale: 4,
  //   coordinates: [121.5820785364223, 25.038971422163264],
  // },
  {
    name: '信義 信義區廣慈博愛園區(B基地)-社福大樓',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.58062264538829, 25.03955494836389],
  },
  {
    name: '信義區廣慈博愛園區社會住宅(C基地)',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.58258728644905, 25.040216928507608]
  },
  {
    name: '信義區廣慈博愛園區社會住宅(D基地)',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.5815589619269, 25.03758860109089]
  },
  {
    name: '信義區廣慈博愛園區社會住宅(E基地)',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.58358313756523, 25.038206459241387]
  },
  {
    name: '信義區六張犁A、B區社會住宅',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.55987926972547, 25.027371098140524]
  },
  {
    name: '信義區三興社會住宅',
    modelUrl: '/model/base.gltf',
    color: [116, 199, 241],
    scale: 4,
    coordinates: [121.55601538461057, 25.026448886125735]
  },
  ///////
  ///////
  {
    name: '文山區興隆D1社會住宅',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.55792237815805, 24.98840127844462]
  },
  {
    name: '文山區興隆D2社會住宅',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [121.55792237815805, 24.98840127844462]
  },
  {
    name: '文山區興隆二期社會住宅(A基地)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.55998119566146, 24.988034594464125]
  },
  {
    name: '文山區興隆二期社會住宅(E基地)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.55848055732581, 24.987894141865684]
  },
  {
    name: '文山區興隆三期社會住宅(F、H基地)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.56123903793313, 24.987501328626095]
  },
  {
    name: '文山區興隆三期社會住宅(I基地)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.56175976675291, 24.986957567834864]
  },
  {
    name: '文山區木柵社會住宅',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.56650218353336, 24.98901321055823]
  },
  {
    name: '文山區和興水岸社會住宅(華興段)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.5493472552733, 24.98485642838508]
  },
  {
    name: '文山區樟新水岸社會住宅(景美女中調車場)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.55641364274042, 24.977479983998943]
  },
  {
    name: '文山區景豐一區社會住宅(景美運動公園南側第一期)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.54576160123473, 25.002672269932685]
  },
  {
    name: '文山區景豐二區社會住宅(景美運動公園南側第二期)',
    modelUrl: '/model/base.gltf',
    color: [156, 148, 199],
    scale: 4,
    coordinates: [ 121.54480149672952, 25.00331470161377]
  },
  ///////
  ///////
  // {
  //   name: '萬華區青年1期社會住宅',
  //   modelUrl: '/model/base.gltf',
  //   color: [245, 177, 158],
  //   scale: 4,
  //   coordinates: [ 121.50373275554888, 25.02017647598477]
  // },
  // {
  //   name: '萬華區青年社會住宅二期',
  //   modelUrl: '/model/base.gltf',
  //   color: [245, 177, 158],
  //   scale: 4,
  //   coordinates: [ 121.50321588885235, 25.020444581972523]
  // },
  {
    name: '萬華區莒光社會住宅(原莒光段基地)',
    modelUrl: '/model/base.gltf',
    color: [245, 177, 158],
    scale: 4,
    coordinates: [ 121.50011365874336, 25.032033522150687]
  },
  {
    name: '萬華區福星社會住宅',
    modelUrl: '/model/base.gltf',
    color: [245, 177, 158],
    scale: 4,
    coordinates: [ 121.50651812538881, 25.046926578119425]
  },
  ///////
  ///////
  {
    name: '南港區東明社會住宅 ',
    modelUrl: '/model/base.gltf',
    color: [190, 197, 69],
    scale: 4,
    coordinates: [ 121.60392378065634, 25.054293052164503]
  },
  {
    name: '南港區中南社會住宅',
    modelUrl: '/model/base.gltf',
    color: [190, 197, 69],
    scale: 4,
    coordinates: [ 121.61921945808454, 25.042881703049336]
  },
  {
    name: '南港區小彎社會住宅',
    modelUrl: '/model/base.gltf',
    color: [190, 197, 69],
    scale: 4,
    coordinates: [ 121.59314421207047, 25.057578750892407]
  },
  {
    name: '南港區經貿社會住宅',
    modelUrl: '/model/base.gltf',
    color: [190, 197, 69],
    scale: 4,
    coordinates: [ 121.61054125253109, 25.056280264793457]
  },
  {
    name: '南港區南港機廠社會住宅',
    modelUrl: '/model/base.gltf',
    color: [190, 197, 69],
    scale: 4,
    coordinates: [ 121.604174372615, 25.051594294844737]
  },
  ///////
  ///////
  {
    name: '內湖區瑞光社會住宅',
    modelUrl: '/model/base.gltf',
    color: [245, 198, 32],
    scale: 4,
    coordinates: [ 121.57909844484804, 25.073446723627413]
  },
  {
    name: '內湖區行善社會住宅(河濱高中)',
    modelUrl: '/model/base.gltf',
    color: [245, 198, 32],
    scale: 4,
    coordinates: [ 121.57807979485915, 25.062168858773088]
  },
  {
    name: '內湖區舊宗社會住宅',
    modelUrl: '/model/base.gltf',
    color: [245, 198, 32],
    scale: 4,
    coordinates: [ 121.58049165993592, 25.06021801597569]
  },
  ///////
  ///////
  {
    name: '大同區明倫社會住宅',
    modelUrl: '/model/base.gltf',
    color: [90, 84, 150],
    scale: 4,
    coordinates: [ 121.51992303718768, 25.073214683954014]
  },
  ///////
  ///////
  {
    name: '中山區培英社會住宅',
    modelUrl: '/model/base.gltf',
    color: [240, 136, 67],
    scale: 4,
    coordinates: [ 121.54861562554656, 25.07979111474236]
  },
  {
    name: '中山區錦州社會住宅',
    modelUrl: '/model/base.gltf',
    color: [240, 136, 67],
    scale: 4,
    coordinates: [ 121.52693708321826, 25.05948970287524]
  },
  ///////
  ///////
  {
    name: '北投區新奇岩社會住宅(原奇岩社會住宅)',
    modelUrl: '/model/base.gltf',
    color: [0, 140, 209],
    scale: 4,
    coordinates: [ 121.50335489671122, 25.123279697780166]
  },
  {
    name: '北投區福國社會住宅(機一)',
    modelUrl: '/model/base.gltf',
    color: [0, 140, 209],
    scale: 4,
    coordinates: [ 121.5138161506804, 25.10215083735948]
  },
  {
    name: '士林區百齡水岸社會住宅(福順段)',
    modelUrl: '/model/base.gltf',
    color: [233, 107, 151],
    scale: 4,
    coordinates: [ 121.51372854089043, 25.0804208321931]
  },
  {
    name: '松山區健康社會住宅',
    modelUrl: '/model/base.gltf',
    color: [93, 158, 80],
    scale: 4,
    coordinates: [ 121.56542569124544, 25.05434333548416]
  },
]

// const data = [
//   {
//     coordinate: [121.5131996, 25.0396149],
//     type: 0,
//     status: 'pending',
//     title: '凱達格蘭大道',
//   }, {
//     coordinate: [121.5039456, 25.0420842],
//     type: 1,
//     status: 'process',
//     title: '龍山寺',
//   }, {
//     coordinate: [121.5362243, 25.0821503],
//     type: 2,
//     status: 'already',
//     title: '培英公園',
//   }
// ]

export default data