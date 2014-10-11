$(document).ready(function() {
    var youranime = new Array("Your anime: ");
    var quotes = new Array(
        "D-Frag", 
        "Dororon Enma Kun Meramera", 
        "Haiyore Nyaruko-san W", 
        "Log Horizon",
        "Magical Warfare", 
        "Onee-chan ga Kita", 
        "Saikin Imouto no Yousu ga Chotto Okashiinda ga", 
        "Suisei no Gargantia",
        "Akame ga Kill!", 
        "Arpeggio of Blue Steel Ars Nova", 
        "Barakamon", 
        "Black Bullet",
        "BlazBlue", 
        "Boku wa Tomodachi ga Sukunai Next", 
        "Bokura wa Minna Kawaisou", 
        "Chuunibyou demo Koi ga Shitai!",
        "Buddy Complex", 
        "Coppelion", 
        "Danganronpa", 
        "Dansai Burni no Crime Edge",
        "Dantalian no Shoka", 
        "Date a Live", 
        "Escha ang Logy no Atelier",
        "Freezing", 
        "Gatchaman Crowds", 
        "Gin no Saji",
        "Glasslip", 
        "Golden Time", 
        "Hataraku Maou-sama!", 
        "High School DxD New", 
        "Hitsugi no Chaika",
        "Hyakka Ryouran Samurai Girls", 
        "Hyakko!", 
        "Inu to Hasami wa Tsukaiyou",
        "Infinity Stratos", 
        "Isshuukan Friend", 
        "Joshiraku",
        "Kami nomi zo Shiru Sekai", 
        "Kami-sama no Inai Nichiyoubi", 
        "Karneval",
        "Kill la Kill", 
        "Koi to Senkyo to Chocolate",
        "Kyoukai no Kanata",
        "Machine-Doll wa Kizutsukanai", 
        "Mahouka Koukou no Rettousei",
        "Makai Ouji Devils and Realist",
        "Maken-ki! Two", 
        "Mangaka-san to Assistant-san to",
        "Maoyuu Maou Yuusha",
        "Mekaku City Actors", 
        "Monogatari Series Second Season",
        "Mikakunin de Shinkoukei",
        "Nisekoi", 
        "Non Non Biyori",
        "Noragami",
        "Nourin", 
        "Ore no Kanojo to Osananajimi Shuraga Sigiru",
        "OreGairu", 
        "Outbreak Company",
        "Photo Kano",
        "Sabagebu!", 
        "Sakurasou no Pet na Kanojo",
        "Sasami-san at Ganbaranai", 
        "Seitokai Yakuindomo",
        "Sekai de Ichiban Tsuyoku Nartitai!",
        "Sengoku Basara The Last Party", 
        "Senran Kagura",
        "Servant x Service", 
        "Shingeki no Kyojin",
        "Shining Hearts Shiawase no Pan",
        "Shinsekai Yori", 
        "Sola",
        "SoniAni", 
        "Stella Jogakuin Koutouka C3-bu",
        "Strike Witches!", 
        "Strike the Blood",
        "Sword Art Online II",
        "To Love-Ru", 
        "Toaru Majitsu no Index ",
        "Tokyo Ghoul", 
        "Tonari no Seki-kun",
        "Tsubasa to Hotaru", 
        "Unbreakable Machine-Doll",
        "Walkure Romance",
        "Watashi ga Motenai no wa Dou Kangaete no Mo Omaera ga Warui", 
        "White Album",
        "Witch Craft Works", 
        "Wizard Barristers",
        "YuShibu", 
        "Akuma no Riddle",
        "Genshiken",
        "Soredemo Sekai wa Utsukushii"
        ),
    randnom = quotes[Math.floor( Math.random() * quotes.length )];
    
    //animate

    $('.reload').addClass('animated fadeInUp');
    //get random

    $('.button').click(function(){
       $('.quote').html( youranime + randnom );
    });

    //reload
    $( ".reload" ).click(function() {
         location.reload(true);
});
});

//for random src img
//var $images = $('#content img'); // Caching ffs !
//for(var i = 0; i < 20; ++i) {
//    var name = getName(getRandom(1, 20));
//    $images[i].attr('src', 'img/preview/' + $images[i].attr('class') + '/' + name + '.jpg');
//}