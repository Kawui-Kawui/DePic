const {
  Client,
  MessageEmbed,
  displayAvatarURL,
  Presence,
  User,
} = require("discord.js");

module.exports = {
  name: "memevideo",
  aliases: ["memev"],
  description: "Quieres unos memes pero en video",
  category: "fun",
  usage: "memev",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
  userPermissions: [],
  cooldown: 3,
  run: async (client, msg, args) => {
    var vmeme = [
      "https://cdn.discordapp.com/attachments/698948374908502036/823595903189254146/956c0640b89b4f012dac2d5d057596db_1.mp4",
      "https://cdn.discordapp.com/attachments/698948374908502036/823615452470050856/video_meme-46.mp4",
      "https://cdn.discordapp.com/attachments/698948374908502036/823633344087588914/5570fd472c83867b06c1edecd0234faa_1_1.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823641864132362301/video0-12-1.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823641421411778620/efe.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823557656974852186/parece_que_va_a_llover.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823412375751098368/eu_mauricio_no_me_remecer_mais.mp4",
      "https://cdn.discordapp.com/attachments/817068709112709170/820156000748568586/TOP_5_MEJORES_ESTUFAS_DEL_MUNDO480P_001.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823260902269648926/How_To_Break_a_Brick_With_Your_Hand.mp4",
      "https://cdn.discordapp.com/attachments/733501891727851608/823204569180930048/video0-7.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/823008028885909524/c_rie.mp4",
      "https://cdn.discordapp.com/attachments/484507444597227521/822979009771208704/video.mp4",
      "https://cdn.discordapp.com/attachments/755527482869940375/818128124474556446/video0fub.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822918004001079327/video1_1.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822866436489084978/Hora_de_ver_momos_a_ver_el_tuyo.mp4",
      "https://cdn.discordapp.com/attachments/733501891727851608/822844722485788682/video0-2-4.mp4",
      "https://cdn.discordapp.com/attachments/770824877148995615/822629918017454170/yt1s.com_-_El_Carro_del_Admin_LUJOS_DE_SER_ADMIN_480p.mp4",
      "https://cdn.discordapp.com/attachments/822492468129169418/822597444566515752/video0_3.mp4",
      "https://cdn.discordapp.com/attachments/725628521388572733/822487650341617714/tGw1iHPr5Y1asJAJ.mp4",
      "https://cdn.discordapp.com/attachments/725628521388572733/822485467961622568/discord-mod-sim-2020_7eZGWPZR.mp4",
      "https://cdn.discordapp.com/attachments/356151080545026049/822512036670996550/PaimonEat.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822513589008072774/vengadores.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822513368811438150/VID-20201217-WA0142.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822513177476464700/itshimbutlinus.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822513027068592168/flamingbeyblade.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822512834129952768/Facebook_undefined360p.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822512169068265493/Facebook_undefinedSource_6.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822511829213380648/cyberpunk.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822511466527195136/Dejame_agarrar_chile_wey360P.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822511249484677190/boom.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822511034836451388/da_risa.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822510312737603704/El_Pepe.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822509437440491520/SPOILER_foshador.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822508726992240660/cabllero.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822508608914718800/are_ya_winnin.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822508310254583828/video0-3-2.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822507797593194516/Amongus_ms.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822507623114211338/video0-3-3.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822505665494122516/videoplayback_2.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822505738684858408/video1-3.mp4",
      "https://cdn.discordapp.com/attachments/733501891727851608/819825637953896468/FLOPPA_FRIDAY.mp4",
      "https://cdn.discordapp.com/attachments/536338240031031333/822504958053056532/y2mate.com_-_Kirby_Mexicano_te_desea_Felice.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739229473472542/slap.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739194148913172/MEME2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739176310145064/kotttot1.webm",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739176310145064/kotttot1.webm",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739173424070676/Cyberpunk_2077_vs_NVIDIA_RTX_30_Series_in_a_Nutshell_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739172598448128/Big_pp_2.mov",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739160685969418/picadura_de_la_cobra_gay-1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739160820711464/epica.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739150360117248/received_116373143600066.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739135239913502/video1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739121468964884/meme_video_doom.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739112694480926/persona_sorfeando_una_hola_jigante-3.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739102162583612/Oni-chan.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739105623408690/Memes_para_volver_a_cagar_Shitposting_102.mov",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739101941465088/Nadie_te_pregunto-1-2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739103401082880/video0-5-1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739090918309988/MEME1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739090675564584/ALV_x2480p.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739073524006912/sabroso.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739069779279913/video0_3.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739055187558430/SPOILER_xd_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739054574927892/wafle.webm",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739053773815818/robamemes.mp3_p_2474564275693013711_2_2474564112350033362.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739042432417802/Que_Wea_quede_lol_XDDD480P_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739038510088252/save.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739029680947251/oe_aweonao_eri_terrible_maraco.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739018101522452/kiwi.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739014280249354/32b420fd-0291-4681-b34c-1e9eaf0cbc85.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739013881790504/8e3e404ec491f0ef8440f271a6aa90d2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739012833083432/Miren_ese_nino_es_mongolito_-_Original.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739011151298580/meap.posting_125869810_651793295505834_7583830774799862072_n.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739008281870346/happy_monke_video.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823739000376131624/video0.mov",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738997893234738/received_2787627374821428.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738992704356372/video0_9.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738978334670919/joke.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738978842837062/received_456894025443914.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738969362792479/jhgfddfggf.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738965601026088/FIRE.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738950027182080/ALAHUAK_BAK_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738896226451485/willywonka__l_willy_wonka_l_posted_on_Instagram_MP4.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738895023079484/video0-3.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738895002107954/efe.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738883757047868/73ac2d0fcf48cd41415805fb306faa1b9fdc9acd.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738883023044638/Chino_Pistola.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738852136976454/116093099_574833813138952_2939787474619286995_n.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738851226550273/el_tio_elmo__shared_a_photo_on_Instagram___EL_PDMP4.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738849988444230/dog.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738845354917888/electrical_wire.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738843407581184/117269455_2293332507479296_4057977795267937090_n.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738802849579078/y2mate.com_-_Shitpost_Status_480p_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738800915742740/video0-23.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738794133815327/batdafw45htgfag5t_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738793693151242/Calla_peruano.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738789071290378/video017.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738786487599115/VID-20200722-WA0004.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738778786332702/5ceb138dd5e075032e42ab8df484550c.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738772196687962/248694395914364291014516466693.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738763078270996/video-1591190417.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738762521083935/aggggggggggg.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738760462204938/video0-3-1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738746821935125/VID-20201014-WA0000.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738746683392040/6e81396de508bdf90f8f9d135f41946439396f70-1-1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738725611470848/shitposter-sin-nombre-20200413-235911-0_DJdR8gc4_j1FC.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738724025892864/158707648_1387272294968539_1423914456060052310_n.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738723496755250/video0-11_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738720208420953/video0_1.mov",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738716492660736/1603821491667.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738709139652668/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738675317833728/aaaa_aaaaaa_aaaaaaa_aaaaaaaaa_20200706_163548_0.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738670242594857/video5.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738635870273556/videoplayback_3.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738628182114314/y2mate.com_-_Esto_pasa_si_metes_una_Cadena_a_la_Licuadora_v_360p.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738618216054834/SPOILER_video0-2-2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738603800756274/xdxdd_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738594124234812/video0_7-2_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738593352089630/SPOILER_mira_esto-1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738587899232256/VID-20210314-WA0077.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738574687174656/video0_2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738576390193172/video0-2_1124313917377700.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738569222389760/video0_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738551349936148/video0_3.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738535978467369/video0_4.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738535248134144/video0_6.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738537148940359/video0_1.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738525185998878/video0_8.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738523508146216/video0_2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738503379550239/VID-20200714-WA0009.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738502688407582/VID-20210318-WA0015.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738499379232798/video0_5.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738498598436894/un_capo_tanjiro-2.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738492832055407/VID-20200702-WA0005.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738490444840991/VID-20200812-WA0032-6.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738479853699132/VID-20200710-WA0002.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738479979790356/SPOILER_anoko_to_likoto_episodio_1_best_moments.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738477778567189/uuuggghhh.mp4",
      "https://cdn.discordapp.com/attachments/488521339305459713/823738471692238848/Shitpost_status480P_7.mp4",
      "https://cdn.discordapp.com/attachments/385373041020108800/822622976175767582/video0.mp4",
      "https://cdn.discordapp.com/attachments/736016752563060828/821231975779532800/town_secuestrador_3-4.mp4",
      "https://cdn.discordapp.com/attachments/359424930686828544/817919732736196638/a01.mp4",
      "https://cdn.discordapp.com/attachments/359424930686828544/817924813427441674/VID_35150320_031252_766.mp4",
      "https://cdn.discordapp.com/attachments/385837258768515083/824005792780910612/video1.mp4",
      "https://cdn.discordapp.com/attachments/385837258768515083/824005792465944616/video0.mp4",
    ];
    var ameme = Math.floor(Math.random() * vmeme.length);

    msg.channel.send(vmeme[ameme]);

    const embed = new MessageEmbed()
      .setDescription("Aqui tienes tu meme")
      .setColor("GREEN")
      .setImage(vmeme[ameme]);
  },
};
