const { Resource } = require('../models');

const resourceData = [
  {"url": "https://blogger.com/", "description": "Donec diam neque", "user_id": 1, "group_id":1  },
  {"url": "http://tinyurl.com/vivamus/metus.js?amet=suspendisse&eros=potenti&suspendisse=cras&accumsan=in&tortor=purus&quis=eu&turpis=magna", "description": "Curabitur in libero", "user_id": 2,"group_id":1 },
  {"url": "http://wisc.edu/augue/", "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "user_id": 3, "group_id":1 },
  {"url": "http://chicagotribune.com/adipiscing/lorem/vitae/mattis/nibh.html?ultrices=tortor&erat=risus&tortor=dapibus&sollicitudin=augue&mi", "description": "Cum sociis natoque ", "user_id": 4, "group_id":1 },
  {"url": "http://mayoclinic.com/ut.xml?lectus=justo&in=sit&est=amet&risus=sapien&auctor=dignissim&sed=vestibulum&tristique=vestibulum&in", "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque.", "user_id": 5, "group_id":1 },
  {"url": "https://gizmodo.com/quis/tortor.js?ultrices=mi&posuere=in&cubilia=porttitor&curae=pede&donec=justo&pharetra=eu&magna=massa&vestibulum=donec&aliquet=dapibus&ultrices", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "user_id": 6, "group_id":1 },
  {"url": "http://about.me/neque/vestibulum/eget/vulputate/ut/ultrices/vel.js?nulla=libero&suscipit=convallis&ligula=eget&in=eleifend&lacus=luctus", "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "user_id": 7, "group_id":1 },
  {"url": "https://istockphoto.com/congue/vivamus/metus/arcu.xml?in=lacus&felis=curabitur&donec=at&semper=ipsum&sapien=ac", "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", "user_id": 8, "group_id":1 },
  {"url": "https://un.org/sapien/in/sapien/iaculis/congue/vivamus/metus.aspx?blandit=vestibulum&ultrices=quam&enim=sapien&lorem", "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "user_id": 9, "group_id":1 },
  { "url": "http://imgur.com/lorem/quisque/ut/", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet..", "user_id": 10, "group_id":1 },
  { "url": "https://home.pl/integer/tincidunt/ante/vel/ipsum/praesent.js?enim=elementum&blandit=in&mi=hac&in=habitasse&porttitor=platea&pede=dictumst&justo=morbi&eu=vestibulum&massa=velit&donec=id&dapibus=pretium&duis=iaculis&at=diam&velit=erat&eu=fermentum&est=justo&congue=nec&elementum=condimentum&in=neque&hac=", "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.", "user_id": 11, "group_id":2 },
  { "url": "http://etsy.com/tellus/", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.", "user_id": 12, "group_id":2 },
  { "url": "https://zdnet.com/nunc/viverra/dapibus/nulla/suscipit/ligula.jsp?sem=sit&sed=amet&sagittis=justo&nam=morbi&congue=ut&risus=odio&semper=cras&porta=mi&volutpat=pede&quam=malesuada&pede=in&lobortis=imperdiet&ligula=et&sit=commodo&amet=vulputate&eleifend=justo&pede=in&libero=blandit&quis=ultrices&orci=enim&nullam=lorem&molestie=ipsum&nibh=dolor&in=sit&lectus=amet", "description": "Vestibulum quam sapien", "user_id": 13, "group_id":2 },
  { "url": "http://nsw.gov.au/ante", "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.", "user_id": 14, "group_id":2 },
  { "url": "https://weather.com/praesent/lectus/vestibulum/quam/sapien.xml?neque=eget&aenean=vulputate&auctor=ut&gravida", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "user_id": 15, "group_id":2 },
  { "url": "https://e-recht24.de/penatibus/et/magnis.aspx?nunc=luctus&commodo=cum&placerat=sociis&praesent=natoque&blandit=penatibus&nam=et&nulla", "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat.", "user_id": 16, "group_id":2 },
  { "url": "https://gmpg.org/lectus.js?convallis=non&nulla=quam&neque=nec&libero=dui&convallis=luctus&eget=rutrum&eleifend", "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "user_id": 17, "group_id":2 },
  { "url": "http://lulu.com/tortor/duis/mattis/", "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", "user_id": 18, "group_id":2 },
  { "url": "http://reference.com/quam/pede/lobortis/ligula/sit/amet/eleifend.json?ante=rutrum&ipsum=nulla&primis", "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", "user_id": 19,"group_id":2 },
  { "url": "http://dell.com/platea/dictumst.jsp?et=potenti&commodo=in&vulputate=eleifend&justo=quam&in=a&blandit=odio&ultrices", "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "user_id": 20, "group_id":2 }
];

const seedResource = () => Resource.bulkCreate(resourceData);

module.exports = seedResource;