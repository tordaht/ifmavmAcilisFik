(() => {
  const profiles = {
    drone: {
      technical: "Drone benchmark'lerinde gosteri, merkezi show control ile yonetilen otonom drone surusu, muzik timecode'u ve okunur figurlere dayaniyor. Teknik kurgu tek bir uzun film gibi degil; 8-12 dakikalik net sahnelere ayrilmali.",
      site: "Acik hava ucus izni, emniyet ceperi, kalkis-inis alani, ruzgar limiti ve guvenlik otoriteleriyle erken koordinasyon gerekir.",
      delivery: "En guclu kullanim sekli gun sonu finalidir. Erken simulasyon, resmi prova ve yedek hava senaryosu zorunludur.",
      sourceName: "Studio DRIFT",
      sourceUrl: "https://studiodrift.com/work/franchise-freedom/"
    },
    mapping: {
      technical: "Projection mapping benchmark'lerinde saha once taranir, yuzey modeli cikartilir, yuksek lumen projeksiyon ve media server uzerinden timecode ile oynatilir. Show dili, cephe geometrisi okunur kaldiginda en etkili sonucu verir.",
      site: "Yuzey olcumu, projektor mesafesi, isik kontrolu, projector throw line'i ve FOH kablolamasi basktan netlestirilmelidir.",
      delivery: "Icerik tasarimi cephe tasarimiyla beraber ele alinmali; protokol cue'su ve ses tasarimi prova takviminin icine islenmelidir.",
      sourceName: "Moment Factory",
      sourceUrl: "https://momentfactory.com/"
    },
    kinetic: {
      technical: "Kinetik isik benchmark'lerinde motorlu winch, aydinlatma objeleri, DMX veya Art-Net ve show control birlikte calisir. Basari, sahne buyuklugunden cok hareket hassasiyeti ve ritim tasarimina baglidir.",
      site: "Rigging noktasi, trim height, tavan yuk kapasitesi, bakim erisimi ve motor guvenlik hesaplari onceden onaylanmalidir.",
      delivery: "Yuksek tavanli sahalarda ana show olarak, daha alçak akslarda ise kisa show loop'u olarak planlanmalidir.",
      sourceName: "WHITEvoid / KINETIC LIGHTS",
      sourceUrl: "https://whitevoid.com/"
    },
    hologram: {
      technical: "Holografik benchmark'lerde esas konu 'gercek hologram' iddiasi degil, gorus acisi, parlaklik ve kontrollu sahne kompozisyonudur. HYPERVSN turu sistemler, onceden hazirlanan dikey 3D icerikle hizli etki verir.",
      site: "Izleyici acisi, arka plan kontrasti, gun isigi kontrolu, enerji ve cihaz guvenligi kritik basliklardir.",
      delivery: "Bu tur sistemler sunucu metni ve sahne gecisiyle birlikte tasarlanirsa ise yarar; tek basina gadget gibi birakilmamalidir.",
      sourceName: "HYPERVSN",
      sourceUrl: "https://hypervsn.com/"
    },
    laser: {
      technical: "Architectural laser benchmark'lerinde etkiyi yaratan sey beam sayisindan cok cephe cizgilerinin dogru okunmasidir. Laser, sis ve muzik birlikte kurgulandiginda mapping veya drone finaline kuvvetli kopru olur.",
      site: "Beam guvenligi, yansima kontrolu, sis miktari, beam yuksekligi ve resmi emniyet prosedurleri onceden onaylanmalidir.",
      delivery: "Acilis finalinde ya da mapping oncesi transition olarak daha gucludur. Tasarim sade tutulmali, mimariye karsi degil mimariyi okutan bir dil kurulmalidir.",
      sourceName: "Pangolin / KVANT benchmark'i",
      sourceUrl: "https://pangolin.com/"
    },
    arrival: {
      technical: "Arrival deneyimlerinde teknik sistem kucuk olabilir; asil deger akisin dogru kurulmasidir. Giris, host, fotograf ve VIP yonlendirme tek bir sahne plani gibi dusunulmelidir.",
      site: "Gecis genisligi, yangin kacis senaryosu, host noktasi, foto aksı ve guvenlik bariyerleri net planlanmalidir.",
      delivery: "Bu tip isler protokol akisini rahatlatmak icin kullanilir; kalabalik yigilmaya yol acmamalidir.",
      sourceName: "Agency arrival planning benchmark'i",
      sourceUrl: "https://hypervsn.com/"
    },
    floor: {
      technical: "Interactive floor benchmark'lerinde tracking, gercek zamanli grafik motoru ve projection katmani birlikte calisir. En guclu sonucu basit, kolay okunan tepki dili verir.",
      site: "Projection yuksekligi, zemin yansimasi, sensor kalibrasyonu, parlaklik ve kaymaz yuzey cozulmelidir.",
      delivery: "Giris veya atrium aksinda kullanildiginda hizli anlasilan bir etki yaratir; uzayan icerik yerine kisitli bir hareket dili daha dogrudur.",
      sourceName: "Moment Factory / SkateMapp",
      sourceUrl: "https://momentfactory.com/products/skatemapp"
    },
    volumetric: {
      technical: "Volumetric display benchmark'lerinde icerik, cihazdan once gelir. Kisa sureli ama net okumali objeler, yazilar ve mimari formlar bu sistemlerde daha iyi calisir.",
      site: "Cihazin etrafinda minimum izleme acisi, arkada temiz fon, kontrollu isik ve cihaz guvenligi gerekir.",
      delivery: "VIP karsilama veya protokol yakininda durup izlenen bir nokta olarak planlanmalidir; ana sahne yerine yardimci premium istasyon gibi dusunulmelidir.",
      sourceName: "HYPERVSN / volumetric benchmark",
      sourceUrl: "https://hypervsn.com/"
    },
    immersiveLight: {
      technical: "Immersive light benchmark'lerinde sistem, ziyaretciyi durdurmaktan cok mekanin atmosferini degistirir. Dikey isik, sensor veya generatif medya katmanlari uzun sureli calismaya uygun kurgulanir.",
      site: "Moduler tasiyici, elektrik dagitimi, karanlik kontrolu ve kalabalik akisinin kesilmemesi esas alinir.",
      delivery: "Bu kategori gun boyu yasayan isler icindir. VIP slotundan sonra da AVM acilis gunu boyunca calisabilecek sekilde planlanmalidir.",
      sourceName: "Squidsoup benchmark'i",
      sourceUrl: "https://squidsoup.org/"
    },
    water: {
      technical: "Water screen benchmark'lerinde su perdesi, projeksiyon, sis ve ruzgar birlikte dusunulur. Etki dogru noktadan izlendigi zaman yuksektir; aci bozulursa sonuc zayiflar.",
      site: "Su temini, drenaj, pompa sesi, ruzgar yonu, projektor korunmasi ve kayma riski saha fizibilitesinde cozulmelidir.",
      delivery: "Ana giris yakininda degil, kontrollu izleme aksinda daha saglikli calisir. Kisa film veya final gecisi icin uygundur.",
      sourceName: "LCI Productions / water screen benchmark",
      sourceUrl: "https://www.lciproductions.com/"
    },
    parade: {
      technical: "Gezici performans benchmark'lerinde asil konu kostumun LED olmasi degil, rota, durak ve kalabalikla iliski tasarimidir. Hareketli ekip, AVM icini tek bir acilis rotasina donusturur.",
      site: "Koridor genislikleri, misafir duraklari, ses seviyesi, escort ekibi ve performans molalari planlanmalidir.",
      delivery: "Yurumeli act'ler tek bir gecede iki veya uc rota halinde oynatildiginda daha verimli olur.",
      sourceName: "Gezici LED performans benchmark'i"
    },
    aerial: {
      technical: "Uluslararasi sahne benchmark'lerinde etkiyi yaratan sey koreografinin IFM'ye ozel sahne diliyle birlestirilmesidir. Aerial, dans veya teknoloji performansi tek basina degil, sahne icerigiyle beraber secilmelidir.",
      site: "Clear height, rigging, artist rider'i, sahne guvenligi, prova saati ve artist dinlenme alani planlanmalidir.",
      delivery: "Bu kategori ana sahne slotu icin ayrilir; sunucu, muzik ve LED icerik ile tam bir sahne bloku olarak yazilmalidir.",
      sourceName: "Cirque du Soleil benchmark'i",
      sourceUrl: "https://www.youtube.com/watch?v=ZrFx-pr5PmA"
    },
    wristband: {
      technical: "Crowd lighting benchmark'lerinde LED bileklikler merkezi kontrol sisteminden renk ve cue alir. Etki, final anda binlerce kisinin ayni isik komutuna tepki vermesiyle ortaya cikar.",
      site: "Giris dagitimi, toplama senaryosu, cue verici noktasi ve kapasite hesabı gereklidir.",
      delivery: "Tek basina degil; DJ, drone veya final countdown ile eslestirildiginde degeri artar.",
      sourceName: "PixMob",
      sourceUrl: "https://pixmob.com/"
    },
    laserHarp: {
      technical: "Laser harp benchmark'lerinde performans, gosteri teknolojisi ile canli muziği birlestiren kisa solo act mantigiyla calisir. En iyi sonuc, karanlikta ve net bir odak aniyla elde edilir.",
      site: "Karanlik kontrolu, beam safety, sahne dumanı ve muzik sistemi entegrasyonu gerekir.",
      delivery: "Gecenin ortasinda tempo degisimi icin veya DJ oncesi kisa teknoloji act'i olarak kullanilabilir.",
      sourceName: "Laser Harp benchmark'i",
      sourceUrl: "https://www.youtube.com/watch?v=euytMaRh8HM"
    }
  };

  window.IFM_ACTIVITY_RESEARCH = {
    A01: {
      ...profiles.drone,
      intro: "Bu aktivite, IFM AVM acilisinin gun sonu imzasi olarak dusunulmelidir. Amaç, VIP acilisi ve public opening gununu tek bir kapanis karesinde toplamak ve IFM logosunu gercekten haber fotografinin merkezi haline getirmektir.",
      role: "Gunun sonunda oynayan ana final isidir. VIP acilisin prestijini toplar, influencer ve basin icin en net kapanis karesini uretir.",
      creative: "Drone dili dekoratif figurlere degil, okunur kurumsal forma dayanmalidir. IFM logosu, Istanbul silueti ve tek bir final cümlesi gibi az ama net sahneler daha gucludur.",
      benchmark: "Studio DRIFT'in Franchise Freedom isi, drone surusunun sadece isik efekti degil kamusal heykel gibi okunabildigini gosteriyor.",
      referenceName: "Studio DRIFT - Franchise Freedom",
      referenceNote: "Referans, drone koreografisinin nasil premium ve sakin bir dille kurulabildigini gosterir.",
      visualNote: "Kart gorseli, IFM cephesini ve plaza aksini tek bir izleme acisinda topluyor; drone isinin hangi noktada okunur olacagini anlatmak icin kullanilir."
    },
    A02: {
      ...profiles.mapping,
      intro: "Bu is kurdele kesimini tek basina protokol fotografi olmaktan cikarip gercek acilis cue'suna donusturur. Kurdele aninda cephe veya ana yuzey aktive olur ve gosterinin resmi baslangici herkes tarafindan ayni anda algilanir.",
      role: "VIP acilisinin resmi baslangic anidir. Kurdele, yonetim ve gorsel patlama ayni karede bulusur.",
      creative: "Kreatif hedef, kurdele anini büyütmek degil, onu binanin ilk isik anina cevirmektir. Bu nedenle hareket dili yalin, ritmi guvenli ve prestijli kalmalidir.",
      benchmark: "Moment Factory benchmark'leri, projection mapping'in en guclu sonucunu mimarinin kendisini konuya donusturdugunda verdigini gosteriyor.",
      referenceName: "Projection mapping benchmark",
      referenceNote: "Referans video, mapping'in kitle onunde tek bir baslangic cue'su gibi kullanilabildigini okumak icin secildi.",
      visualNote: "Bu gorsel, kurdele aninin IFM cephe cizgisine nasil tasinabilecegini ve binanin bir anda show yuzeyine donusmesini anlatir."
    },
    A03: {
      ...profiles.kinetic,
      intro: "Bu aktivite, IFM'nin ana ic mekan show'u olarak kurgulanir. Tavanda hareket eden isik objeleri, acilisin muzik diliyle birlikte calisir ve mekana yukardan kurulan bir ritim hissi verir.",
      role: "Ana atrium veya yuksek tavanli ic mekanda merkezi show olarak kullanilir. Kalabaligi tek noktada toplamak icin gucludur.",
      creative: "Buradaki hedef, 'cok isik' degil, hacim duygusudur. Tavan buyuklugu bir zenginlik olarak okunmali; hareketler kontrollu ve mimariye saygili kalmalidir.",
      benchmark: "WHITEvoid benchmark'leri, kinetik sistemlerin dogru trim height ve ritim tasarimiyla sahnenin kendisini degistirebildigini gosteriyor.",
      referenceName: "WHITEvoid / kinetic light benchmark",
      referenceNote: "Referans, motorlu isik sistemlerinin izleyicide nasil bir olcek duygusu yarattigini okumak icin secildi.",
      visualNote: "Konsept gorsel, IFM atrium tavaninda asili isik cisimlerinin hangi yogunlukta kullanilmasi gerektigini anlatir."
    },
    A04: {
      ...profiles.aerial,
      intro: "Bu kategori, IFM'nin 'uluslararasi booking' beklentisine cevap veren ana sahne performansidir. Aerial, teknoloji-dans veya isik temelli yabanci ekip secimiyle geceye tek bir prestijli sahne anı ekler.",
      role: "VIP acilis gecesinde herkesin dikkatini sahneye toplamak icin kullanilir. Basina aktarilabilir bir booking hikayesi uretir.",
      creative: "Secim, sadece taninir isim aramak uzerinden degil; IFM'nin kurumsal ve premium diline hangi ekiplerin uydugu uzerinden yapilmalidir.",
      benchmark: "Cirque benchmark'i, havada performansin dogru sahne dilinde hala cok guclu bir headline olabildigini gosteriyor.",
      referenceName: "International signature performance benchmark",
      referenceNote: "Video, IFM benzeri premium acilis gecelerinde calisabilecek bir sahne buyuklugunu okumak icin secildi.",
      visualNote: "Bu gorsel, performansin cephe onunde ya da ana sahnede nasil premium bir odak anina donusecegini gosterir."
    },
    A05: {
      ...profiles.hologram,
      intro: "Holographic Opening Host, fiziki sunucunun yerine gecen bir numara degil; ana sunucuyu guclendiren bir acilis katmanidir. Ilk dakikada teknoloji vurgusu verir ve sahne gecislerini daha temiz hale getirir.",
      role: "VIP acilisinda host girisi, protokol anonsu veya acilis filminin ilk giris cümlesi icin kullanilir.",
      creative: "Bu is fazla uzun tutulmamalidir. En iyi kullanim bicimi, 45-90 saniyelik net bloklarla 'ilk gorunen teknoloji jesti' yaratmaktir.",
      benchmark: "HYPERVSN benchmark'leri, holografik event host uygulamalarinin en iyi sonucu kisa, temiz ve kurumsal icerikte verdigini gosteriyor.",
      referenceName: "HYPERVSN event host benchmark",
      referenceNote: "Referans, holografik karakterin sahnede tek basina degil sunum akisiyle birlikte nasil kullanildigini gosterir.",
      visualNote: "Yeni gorsel dili, bos koridora cizgi koymak yerine gerçek bir sahne partneri hissi vermelidir."
    },
    A06: {
      ...profiles.laser,
      intro: "Architectural Laser Show, IFM'nin cephesini ve plaza aksini geceleyin okunur bir show cizgisine donusturur. Drone veya mapping kadar uzun bir is olmak zorunda degildir; guclu bir gecis ve odak anı olarak kullanilir.",
      role: "Acilis finalinde mapping ile drone arasinda veya ana giris aninda gerilim yaratan teknik katmandir.",
      creative: "Lazer dili bina cizgisine saygili kalmalidir. Cok renkli bir festival hissi yerine secili hatlari vurgulayan net bir premium dil kurulmalidir.",
      benchmark: "Architectural laser benchmark'leri, mimariyi örten degil mimariyi okutan bir beam kurgusunun daha sofistike algilandigini gosteriyor.",
      referenceName: "Architectural laser benchmark",
      referenceNote: "Bu video, laser'in cephe okumasini nasil buyuttugunu gormek icin secildi.",
      visualNote: "Konsept gorsel, lazerin IFM kuleleri ve avm cephesiyle beraber bir gece silueti olusturmasini hedefler."
    },
    A07: {
      ...profiles.arrival,
      intro: "Mirror Arrival Tunnel, VIP girisini klasik kirmizi hali kurgusundan alip daha fotografik ve kontrollu bir deneyime tasir. Giris, daha mekana gelmeden premium algi kurar.",
      role: "Cemiyet, kiraci ve influencer davetlilerinin geldigi ana VIP aksinda kullanilir.",
      creative: "Buradaki hedef 'sovlu tunel' yapmak degil; konugu daha iyi gosteren yansima, isik ve ritim duzeni kurmaktir.",
      benchmark: "Arrival benchmark'lerinde fotografa iyi davranan giris mekanlari, basin goruntusunde en hizli farki yaratan unsurlardan biri oluyor.",
      referenceName: "Arrival tunnel benchmark",
      referenceNote: "Referans video, aynali ve sonsuzluk hissi veren mekan dilinin nasil premium bir giris fonu oldugunu okumak icin secildi.",
      visualNote: "Bu gorsel, VIP girisin moduler bir tunel yerine mekan icine entegre premium bir gecis olarak kurgulanmasini hedefler."
    },
    A08: {
      ...profiles.floor,
      intro: "Interactive Projection Floor, giris veya atrium hattina hareketle tepki veren bir zemin dili ekler. Is; oyunlastirma yapmak icin degil, giris akisini daha canli ve daha okunur hale getirmek icin secilir.",
      role: "Giris veya yonlendirme aksinda kullanilir; davetliyi tek noktada durdurmadan etkinligin icine alir.",
      creative: "Grafik dili fazla karmasik olmamali. Akis, dalga veya IFM cizgisi gibi kolay okunan bir hareket dili daha premium sonuc verir.",
      benchmark: "Moment Factory / SkateMapp benchmark'i, interaktif zeminin en iyi sonucu beden hareketine basit ve net tepki verince elde ettigini gosteriyor.",
      referenceName: "Interactive floor benchmark",
      referenceNote: "Referans, zeminin fiziksel trafikle nasil birlikte calistigini okumak icin secildi.",
      visualNote: "Konsept gorsel, teknolojiyi oyuncak gibi degil mekanin kendi zemini gibi gostermelidir."
    },
    A09: {
      ...profiles.volumetric,
      intro: "Volumetric Hologram Experience, durup izlenen premium bir istasyondur. Amaci ana show'u tekrar etmek degil; VIP alanda kisa bir teknolojik vitrin etkisi yaratmaktir.",
      role: "Protokol yakininda, lounge girisinde veya VIP karsilama bandinda ikinci odak noktasi olarak kullanilir.",
      creative: "Icerik, mimari model, IFM logosu, tarih veya acilis mesajı gibi net okunur seylere dayanmalidir. Abartili 3D hereketten kacınılmalıdır.",
      benchmark: "Volumetric benchmark'leri, cihazdan cok icerik netliginin izleyicide guven ve prestij hissi yarattigini gosteriyor.",
      referenceName: "Volumetric display benchmark",
      referenceNote: "Referans video, bu teknolojinin yakindan izlendiginde nasil algilandigini okumak icin secildi.",
      visualNote: "IFM yerlesiminde cihaz bir sergi objesi gibi degil, kontrollu bir premium istasyon gibi durmalidir."
    },
    A10: {
      ...profiles.arrival,
      intro: "Projection-Mapped Arrival Portal, VIP girisi kendi basina bir etkinlik kapisina donusturur. Davetli daha ana alana girmeden once açılış dilini hisseder.",
      role: "Giris aksinda fotograflanan, iceri gecis kararini sahneye ceviren ana premium portal olarak kullanilir.",
      creative: "Portal fiziksel bir tak olmaktan öte, gorsel ve mimari katmanin birlesimi olarak kurulmalidir. Icerik kısa ve net okunur olmalidir.",
      benchmark: "Mapping destekli arrival benchmark'leri, davetlinin ilk adiminda teknolojiyi hissettiren kapilarin basin fotografina dogrudan katkı verdigini gosteriyor.",
      referenceName: "Projection portal benchmark",
      referenceNote: "Referans, giriş portalinin tek bir foto noktasina degil gecis anina hizmet ettigini okumak icin secildi.",
      visualNote: "Konsept gorsel, kapinin saha dekoru gibi degil IFM'nin resmi giris ritueli gibi okunmasini hedefler."
    },
    A11: {
      ...profiles.hologram,
      intro: "Holographic Welcome Totem, statik signage yerine hareketli ve premium bir karsilama objesi sunar. Bilgi, logo ve yönlendirme ayni cihazda toplanabilir.",
      role: "VIP giriste, lounge yakininda veya basin karşılama noktasinda kullanilir.",
      creative: "Bu is, insan boyuna yakin ve sakin durursa premium algilanir. AVM fuar standi gibi bagirmamali.",
      benchmark: "HYPERVSN benchmark'leri, kucuk ve dikey holografik sistemlerin ozellikle karsilama, mesaj ve marka vurgusunda guclu oldugunu gosteriyor.",
      referenceName: "Holographic totem benchmark",
      referenceNote: "Referans, dikey formatta 3D mesaj ve logo gostermenin sahadaki etkisini okumak icin secildi.",
      visualNote: "IFM icinde tek veya cift totem, giris aksina ritim veren premium bir obje gibi okunmali."
    },
    A12: {
      ...profiles.arrival,
      intro: "Light Veil Corridor, VIP yuruyusunu daha yavas, daha zarif ve daha kontrollu hissettiren bir giris katmanidir. Tunel gibi kapatan degil, isikla cerceveleyen bir yaklasim hedefler.",
      role: "Cemiyet ve influencer girisinde portre cekimlerine iyi davranan premium yuruyus koridoru olarak konumlanir.",
      creative: "Bu kategoride fazla teknik gorunmek yerine atmosfer tasarlamak gerekir. Isik yogunlugu dusuk ama secici kalmalidir.",
      benchmark: "Immersive light benchmark'leri, dikey isik katmaninin moda ve premium etkinliklerde guclu bir arrival dili kurdugunu gosteriyor.",
      referenceName: "Light corridor benchmark",
      referenceNote: "Referans, dikey isik cizgilerinin yurume aksini nasil premiumlastirdigini okumak icin secildi.",
      visualNote: "Konsept gorsel, sert kemerli tunel yerine daha hafif bir isik gecisi hedeflemelidir."
    },
    A13: {
      ...profiles.immersiveLight,
      intro: "Digital River Flows, avm icindeki hareketi acilis gunune ozel bir medya rotasina cevirir. Dekoratif bir projection degil; mekanin altindan akan kurumsal bir akiş hissi yaratir.",
      role: "Atrium, plaza veya genis koridor aksinda gun boyu yasayan bir medya rotasi olarak kullanilir.",
      creative: "Grafik dilinde finans akisi, veri, su ve sehir metaforlari ayni anda kullanilabilir; ama son goruntu sakin ve kurumsal kalmalidir.",
      benchmark: "Immersive medya benchmark'leri, mekan tabanli akıs islerinin ziyaretciyi durdurmadan etki yaratabildigini gosteriyor.",
      referenceName: "Digital flow benchmark",
      referenceNote: "Referans, zemin ve su etkisinin beraber kullanildiginda nasil daha buyuk bir alan duygusu yarattigini okumak icin secildi.",
      visualNote: "Konsept gorsel, bu isin sadece zemin efekti degil IFM'de bir hareket dili oldugunu anlatmalidir."
    },
    A14: {
      ...profiles.immersiveLight,
      intro: "Interactive Light Forest, IFM'nin bir koridorunu veya atrium kenarini uzun sure yasayan bir isik enstalasyonuna donusturur. Ana show degil, gün boyu guclu kalan premium bir atmosfer isidir.",
      role: "Acilis gunu boyunca influencer cekimlerinde, basin turunda ve ziyaretci akisinda surekli gorunen yavas bir premium instalasyon olarak kullanilir.",
      creative: "Buradaki isik dili sahne mantigiyla degil, mekan tasarimi mantigiyla kurulmalidir. Dikey elemanlar IFM'nin mimarisine paralel okunmalidir.",
      benchmark: "Squidsoup ve benzeri benchmark'ler, binlerce kucuk isik noktasinin mekani tek bir atmosfer objesine cevirebildigini gosteriyor.",
      referenceName: "Interactive light forest benchmark",
      referenceNote: "Referans video, ziyaretcinin isikla iliskisini ve isigin mekan icinde nasil bir derinlik verdigini okumak icin secildi.",
      visualNote: "Konsept gorsel, AVM dekorasyonu degil kurumsal isik enstalasyonu hissi vermelidir."
    },
    A15: {
      ...profiles.kinetic,
      intro: "Kinetic Sculpture Plaza, acilis alanina hareket eden bir sanat objesi koyar. Etkiyi sahneye degil mekana dagitmak istendiginde guclu bir secenektir.",
      role: "Plaza veya ana ortak alanda kaliciya yakin bir gecici imza obje olarak kullanilir.",
      creative: "Objenin gorsel dili heykelsi ve temiz kalmali; mekanik hareket estetikten once gelmemelidir.",
      benchmark: "Kinetik sanat benchmark'leri, iyi secilmis tek bir hareketli objenin markanin sofistike algisina buyuk katkı verebildigini gosteriyor.",
      referenceName: "Kinetic sculpture benchmark",
      referenceNote: "Referans, hareketli objenin tek basina nasil bir odak noktasi olabildigini okumak icin secildi.",
      visualNote: "Bu is, IFM'de 'sahne prop'u' gibi degil heykel gibi oturmalidir."
    },
    A16: {
      ...profiles.water,
      intro: "Water Screen Projection, acilis gecesine gecici ama cok hatirlanan bir katman ekler. Sis veya su perdesi uzerindeki goruntu, final ya da gecis sahnesi icin guclu bir sinema hissi yaratir.",
      role: "Gece programinda kisitli sureli odak anı veya final gecisi olarak kullanilir.",
      creative: "Bu is surekli degil, secili anda kullanildiginda degerlidir. Fazla uzun tutulursa teknik gosteriye donusur.",
      benchmark: "Water screen benchmark'leri, dogru izleme acisinda yuksek etkili ama saha planlamasi hassas isler oldugunu gosteriyor.",
      referenceName: "Water screen benchmark",
      referenceNote: "Referans, projeksiyonun su perdesi uzerinde nasil bir volum kazandigini okumak icin secildi.",
      visualNote: "Konsept gorsel, IFM'de su perdesinin nereye bakilarak izlenmesi gerektigini anlatmalidir."
    },
    A17: {
      ...profiles.immersiveLight,
      intro: "Suspended Light Cloud, tavanda asili bir medya bulutu gibi calisir. Ana sahneye cikmadan da luks bir atmosfer kurmak istendigi zaman guclu bir secenektir.",
      role: "Yuksek tavanli gecis alanlarinda ya da lounge yakininda surekli gorunen premium hacim objesi olur.",
      creative: "Bulut dili, cocuksu veya tema-park hissine kacmamalidir. Isik yogunlugu dusuk, derinlik algisi yuksek tutulmalidir.",
      benchmark: "Squidsoup benchmark'leri, asili isik noktalariyla olusan hacimlerin ziyaretcide dogrudan mekansal bir etki yarattigini gosteriyor.",
      referenceName: "Suspended light benchmark",
      referenceNote: "Referans, yukarda asili isigin tek karede nasil buyuk bir atmosfer objesine donustugunu okumak icin secildi.",
      visualNote: "IFM gorselinde bu is, tavana eklenmis sus degil hava hacmi gibi okunmalidir."
    },
    A18: {
      ...profiles.mapping,
      intro: "Generative Media Art Wall, IFM acilisina kurumsal bir medya sanat katmani ekler. Marka veya leasing iletisimi yapmak yerine mekanin prestijini buyutmek icin secilir.",
      role: "Giris cephesi, yan duvar veya lounge yakininda medya sanat yüzeyi olarak kullanilir.",
      creative: "Icerik tek bir reklam filmi gibi degil; uzun sure bakilabilen generatif bir akıs olarak dusunulmelidir.",
      benchmark: "Moment Factory ve medya sanat benchmark'leri, uzun soluklu duvar iceriginin reklam degil sanat objesi gibi kurgulandiginda daha premium algilandigini gosteriyor.",
      referenceName: "Generative media wall benchmark",
      referenceNote: "Referans, duvar iceriginin dekorasyondan farkli olarak mekan degerine nasil katki verdigini okumak icin secildi.",
      visualNote: "Konsept gorsel, IFM duvarini LED panel gibi degil premium medya sanati yüzeyi gibi gostermelidir."
    },
    A19: {
      ...profiles.parade,
      intro: "Light Parade, AVM icindeki hareketi tek bir event dili altina toplar. Sadece sahnede kalan acilis programini AVM'nin icine yaymak icin kullanilir.",
      role: "Acilis saati boyunca birden fazla noktayi aktive eden gezici performance layer olarak gorev alir.",
      creative: "Kostum, muzik ve rota ayni estetik dilde olmalidir. Tek tek performerdan cok toplam gecis resmi onemlidir.",
      benchmark: "LED parade benchmark'leri, hareketli ekiplerin AVM gibi cok odakli mekanlarda programi tek bir akisa baglayabildigini gosteriyor.",
      referenceName: "Light parade benchmark",
      referenceNote: "Referans, gezici ekiplerin kalabalik icinde nasil bir show rotasi kurdugunu okumak icin secildi.",
      visualNote: "Konsept gorsel, koridoru kesen degil AVM'nin icinde akan bir parade duygusu vermelidir."
    },
    A20: {
      ...profiles.parade,
      intro: "LED Dancers, sahnede ya da gecis aksinda daha ritmik ve kisa sureli bir gorsel show katmani sunar. DJ, protokol gecisi veya kısa acilis block'u ile rahat eslesir.",
      role: "Ana sahne oncesi, DJ girisi oncesi ya da parade icindeki duraklarda kullanilabilir.",
      creative: "Burada mesele kostumun parlamasi degil, koreografinin net ve kurumsal bir show dili kurmasidir. Renk paleti IFM'nin gece kimligine bagli kalmalidir.",
      benchmark: "LED dance benchmark'leri, dansin teknolojiyle birlestiginde kisa surede yuksek gorsel enerji yaratabildigini gosteriyor.",
      referenceName: "LED dance benchmark",
      referenceNote: "Referans, kisa sureli ama yüksek enerji veren bir sahne katmanini okumak icin secildi.",
      visualNote: "Konsept gorsel, bu isi cocuksu glow kostum olarak degil premium koreografi diliyle gostermelidir."
    },
    A21: {
      ...profiles.aerial,
      intro: "Flying Musicians / Floating Orchestra, IFM'nin daha rafine ve beklenmedik bir sahne anı aradigi yerde kullanilir. Muzik ile havadaki performans birlestiginde gece daha kulturel ve daha luks bir seviyeye cikar.",
      role: "VIP acilis programinda daha seckin bir ton istendiginde ana sahneye alternatif headline olabilir.",
      creative: "Bu secenek, kalabalik enerji yerine zarafet aranan noktada degerlidir. Muzik ve aerial ayni anda sahneledigi zaman fark yaratir.",
      benchmark: "Aerial performance benchmark'leri, canli muzikle birlestiginde bu kategorinin sirf gorsel degil 'olay' olarak algilandigini gosteriyor.",
      referenceName: "Floating orchestra benchmark",
      referenceNote: "Referans, yukarda asili performans ile canli muzigin ayni anda nasil premium bir an yarattigini okumak icin secildi.",
      visualNote: "Bu is icin uretilen gorsel, cizgisel placeholder degil gerçekten havada konumlanmis bir performans anı gibi okunmalidir."
    },
    A22: {
      ...profiles.parade,
      intro: "LED Percussion Procession, sesin ve hareketin AVM icinde birlikte yurudugu daha ritmik bir performans katmani sunar. Light Parade'e gore daha güçlü ses izi birakir.",
      role: "Gecis akslarinda kalabaligi hareket ettirmek ve programi bir noktadan digerine tasimak icin kullanilir.",
      creative: "Perkusion ekibi fazla festival tonuna kacmadan, daha temiz ve keskin bir performans diliyle kurgulanmalidir.",
      benchmark: "Percussion benchmark'leri, ritmin hareketli rota islerinde izleyiciyi toplamak icin en etkili arac oldugunu gosteriyor.",
      referenceName: "LED percussion benchmark",
      referenceNote: "Referans, hareketli ritim ekibinin AVM veya acik alan aksinda nasil enerji kurdugunu okumak icin secildi.",
      visualNote: "Konsept gorsel, isik ve davulun beraber aktigi bir gecis anı vermelidir."
    },
    A23: {
      ...profiles.wristband,
      intro: "Synchronized LED Wristband Finale, izleyiciyi sadece seyreden degil finalin parcasi olan bir kitleye cevirir. VIP ve public acilis arasinda duygusal ortak an yaratmak icin gucludur.",
      role: "Countdown, DJ finali, drone veya kapanis anonsuyla birlikte kullanildiginda gecenin hafizada kalan ortak ritueli olur.",
      creative: "Bileklikler dekor gibi dagitilmamali; final dramaturjisinin bir parcasi olarak yazilmalidir. Bir renk hikayesi ve net cue planı gerekir.",
      benchmark: "PixMob benchmark'leri, kitle isiginin final aninda binlerce kisiyi ayni karede birlestirebildigini gosteriyor.",
      referenceName: "PixMob crowd lighting benchmark",
      referenceNote: "Referans, toplu LED cue'nun konser ölcegindeki etkisini okumak icin secildi.",
      visualNote: "Konsept gorsel, IFM finalinde eldeki isigin tek bir kitle resmi yaratmasini hedeflemelidir."
    },
    A24: {
      ...profiles.laserHarp,
      intro: "Laser Harp Performance, klasik DJ veya solo muzik act'ine gore daha teknolojik ve daha teatral bir ara an yaratir. Kisa sureli ama hatirlanan teknoloji performansidir.",
      role: "Ana final oncesi tempo degisimi, VIP segmenti veya DJ girisi oncesi teknoloji moment'i olarak kullanilir.",
      creative: "Bu is kisa tutuldugunda gucludur. Laser enstruman etkisi, IFM'nin teknoloji ve prestij diliyle uyumlu sekilde olgun bir tasarimla sunulmalidir.",
      benchmark: "Laser harp benchmark'leri, teknoloji temelli solo performanslarin sahnede hem muzik hem gorsellik uretebildigini gosteriyor.",
      referenceName: "Laser harp benchmark",
      referenceNote: "Referans, sahnede tek artist ile dahi premium bir teknoloji anı kurulabildigini okumak icin secildi.",
      visualNote: "Konsept gorsel, bu isi cizgisel demo gibi degil karanlikta odaklanan sahne anı gibi gostermelidir."
    }
  };
})();
