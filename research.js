(() => {
  const profiles = {
    drone: {
      technical: "Drone benchmark'lerinde gösteri, merkezi show control ile yönetilen otonom drone sürüsü, müzik timecode'u ve okunur figürlere dayanıyor. Teknik kurgu tek bir uzun film gibi değil; 8-12 dakikalık net sahnelere ayrılmalı.",
      site: "Açık hava uçuş izni, emniyet çeperi, kalkış-iniş alanı, rüzgar limiti ve güvenlik otoriteleriyle erken koordinasyon gerekir.",
      delivery: "En güçlü kullanım şekli gün sonu finalidir. Erken simülasyon, resmi prova ve yedek hava senaryosu zorunludur.",
      sourceName: "Studio DRIFT",
      sourceUrl: "https://studiodrift.com/work/franchise-freedom/"
    },
    mapping: {
      technical: "Projection mapping benchmark'lerinde saha önce taranır, yüzey modeli çıkartılır, yüksek lümen projeksiyon ve media server üzerinden timecode ile oynatılır. Show dili, cephe geometrisi okunur kaldığında en etkili sonucu verir.",
      site: "Yüzey ölçümü, projektör mesafesi, ışık kontrolü, projektor throw line'ı ve FOH kablolaması baştan netleştirilmelidir.",
      delivery: "İçerik tasarımı cephe tasarımıyla beraber ele alınmalı; protokol cue'su ve ses tasarımı prova takviminin içine işlenmelidir.",
      sourceName: "Moment Factory",
      sourceUrl: "https://momentfactory.com/"
    },
    kinetic: {
      technical: "Kinetik ışık benchmark'lerinde motorlu winch, aydınlatma objeleri, DMX veya Art-Net ve show control birlikte çalışır. Başarı, sahne büyüklüğünden çok hareket hassasiyeti ve ritim tasarımına bağlıdır.",
      site: "Rigging noktası, trim height, tavan yük kapasitesi, bakım erişimi ve motor güvenlik hesapları önceden onaylanmalıdır.",
      delivery: "Yüksek tavanlı sahalarda ana show olarak, daha alçak akslarda ise kısa show loop'u olarak planlanmalıdır.",
      sourceName: "WHITEvoid / KINETIC LIGHTS",
      sourceUrl: "https://whitevoid.com/"
    },
    hologram: {
      technical: "Holografik benchmark'lerde esas konu 'gerçek hologram' iddiası değil, görüş açısı, parlaklık ve kontrollü sahne kompozisyonudur. HYPERVSN türü sistemler, önceden hazırlanan dikey 3D içerikle hızlı etki verir.",
      site: "İzleyici açısı, arka plan kontrastı, gün ışığı kontrolü, enerji ve cihaz güvenliği kritik başlıklardır.",
      delivery: "Bu tür sistemler sunucu metni ve sahne geçişiyle birlikte tasarlanırsa işe yarar; tek başına gadget gibi bırakılmamalıdır.",
      sourceName: "HYPERVSN",
      sourceUrl: "https://hypervsn.com/"
    },
    laser: {
      technical: "Architectural laser benchmark'lerinde etkiyi yaratan şey beam sayısından çok cephe çizgilerinin doğru okunmasıdır. Lazer, sis ve müzik birlikte kurgulandığında mapping veya drone finaline kuvvetli köprü olur.",
      site: "Beam güvenliği, yansıma kontrolü, sis miktarı, beam yüksekliği ve resmi emniyet prosedürleri önceden onaylanmalıdır.",
      delivery: "Açılış finalinde ya da mapping öncesi transition olarak daha güçlüdür. Tasarım sade tutulmalı, mimariye karşı değil mimariyi okutan bir dil kurulmalıdır.",
      sourceName: "Pangolin / KVANT benchmark'ı",
      sourceUrl: "https://pangolin.com/"
    },
    arrival: {
      technical: "Arrival deneyimlerinde teknik sistem küçük olabilir; asıl değer akışın doğru kurulmasıdır. Giriş, host, fotoğraf ve VIP yönlendirme tek bir sahne planı gibi düşünülmelidir.",
      site: "Geçiş genişliği, yangın kaçış senaryosu, host noktası, foto aksı ve güvenlik bariyerleri net planlanmalıdır.",
      delivery: "Bu tip işler protokol akışını rahatlatmak için kullanılır; kalabalık yığılmaya yol açmamalıdır.",
      sourceName: "Agency arrival planning benchmark'ı",
      sourceUrl: "https://hypervsn.com/"
    },
    floor: {
      technical: "Interactive floor benchmark'lerinde tracking, gerçek zamanlı grafik motoru ve projection katmanı birlikte çalışır. En güçlü sonucu basit, kolay okunan tepki dili verir.",
      site: "Projeksiyon yüksekliği, zemin yansıması, sensör kalibrasyonu, parlaklık ve kaymaz yüzey çözülmelidir.",
      delivery: "Giriş veya atrium aksında kullanıldığında hızlı anlaşılan bir etki yaratır; uzayan içerik yerine kısıtlı bir hareket dili daha doğrudur.",
      sourceName: "Moment Factory / SkateMapp",
      sourceUrl: "https://momentfactory.com/products/skatemapp"
    },
    volumetric: {
      technical: "Volumetric display benchmark'lerinde içerik, cihazdan önce gelir. Kısa süreli ama net okumalu objeler, yazılar ve mimari formlar bu sistemlerde daha iyi çalışır.",
      site: "Cihazın etrafında minimum izleme açısı, arkada temiz fon, kontrollü ışık ve cihaz güvenliği gerekir.",
      delivery: "VIP karşılama veya protokol yakınında durup izlenen bir nokta olarak planlanmalıdır; ana sahne yerine yardımcı premium istasyon gibi düşünülmelidir.",
      sourceName: "HYPERVSN / volumetric benchmark",
      sourceUrl: "https://hypervsn.com/"
    },
    immersiveLight: {
      technical: "Immersive light benchmark'lerinde sistem, ziyaretçiyi durdurmaktan çok mekanın atmosferini değiştirir. Dikey ışık, sensör veya generatif medya katmanları uzun süreli çalışmaya uygun kurgulanır.",
      site: "Modüler taşıyıcı, elektrik dağıtımı, karanlık kontrolü ve kalabalık akışının kesilmemesi esas alınır.",
      delivery: "Bu kategori gün boyu yaşayan işler içindir. VIP slotundan sonra da AVM açılış günü boyunca çalışabilecek şekilde planlanmalıdır.",
      sourceName: "Squidsoup benchmark'ı",
      sourceUrl: "https://squidsoup.org/"
    },
    water: {
      technical: "Water screen benchmark'lerinde su perdesi, projeksiyon, sis ve rüzgar birlikte düşünülür. Etki doğru noktadan izlendiği zaman yüksektir; açı bozulursa sonuç zayıflar.",
      site: "Su temini, drenaj, pompa sesi, rüzgar yönü, projektör korunması ve kayma riski saha fizibilitesinde çözülmelidir.",
      delivery: "Ana giriş yakınında değil, kontrollü izleme aksında daha sağlıklı çalışır. Kısa film veya final geçişi için uygundur.",
      sourceName: "LCI Productions / water screen benchmark",
      sourceUrl: "https://www.lciproductions.com/"
    },
    parade: {
      technical: "Gezici performans benchmark'lerinde asıl konu kostümün LED olması değil, rota, durak ve kalabalıkla ilişki tasarımıdır. Hareketli ekip, AVM içini tek bir açılış rotasına dönüştürür.",
      site: "Koridor genişlikleri, misafir durakları, ses seviyesi, escort ekibi ve performans molaları planlanmalıdır.",
      delivery: "Yürüyüşlü act'ler tek bir gecede iki veya üç rota halinde oynatıldığında daha verimli olur.",
      sourceName: "Gezici LED performans benchmark'ı"
    },
    aerial: {
      technical: "Uluslararası sahne benchmark'lerinde etkiyi yaratan şey koreografinin İFM'ye özel sahne diliyle birleştirilmesidir. Aerial, dans veya teknoloji performansı tek başına değil, sahne içeriğiyle beraber seçilmelidir.",
      site: "Clear height, rigging, artist rider'ı, sahne güvenliği, prova saati ve artist dinlenme alanı planlanmalıdır.",
      delivery: "Bu kategori ana sahne slotu için ayrılır; sunucu, müzik ve LED içerik ile tam bir sahne bloku olarak yazılmalıdır.",
      sourceName: "Cirque du Soleil benchmark'ı",
      sourceUrl: "https://www.youtube.com/watch?v=ZrFx-pr5PmA"
    },
    wristband: {
      technical: "Crowd lighting benchmark'lerinde LED bileklikler merkezi kontrol sisteminden renk ve cue alır. Etki, final anda binlerce kişinin aynı ışık komutuna tepki vermesiyle ortaya çıkar.",
      site: "Giriş dağıtımı, toplama senaryosu, cue verici noktası ve kapasite hesabı gereklidir.",
      delivery: "Tek başına değil; DJ, drone veya final countdown ile eşleştirildiğinde değeri artar.",
      sourceName: "PixMob",
      sourceUrl: "https://pixmob.com/"
    },
    laserHarp: {
      technical: "Laser harp benchmark'lerinde performans, gösteri teknolojisi ile canlı müziği birleştiren kısa solo act mantığıyla çalışır. En iyi sonuç, karanlıkta ve net bir odak anıyla elde edilir.",
      site: "Karanlık kontrolü, beam safety, sahne dumanı ve müzik sistemi entegrasyonu gerekir.",
      delivery: "Gecenin ortasında tempo değişimi için veya DJ öncesi kısa teknoloji act'i olarak kullanılabilir.",
      sourceName: "Laser Harp benchmark'ı",
      sourceUrl: "https://www.youtube.com/watch?v=euytMaRh8HM"
    }
  };

  window.IFM_ACTIVITY_RESEARCH = {
    A01: {
      ...profiles.drone,
      intro: "Bu aktivite, İFM AVM açılışının gün sonu imzası olarak düşünülmelidir. Amaç, VIP açılışı ve public opening gününü tek bir kapanış karesinde toplamak ve İFM AVM'yi gerçekten haber fotoğrafının merkezi haline getirmektir.",
      role: "Günün sonunda oynayan ana final işidir. VIP açılışın prestijini toplar, influencer ve basın için en net kapanış karesini üretir.",
      creative: "Drone dili dekoratif figürlere değil, okunur kurumsal forma dayanmalıdır. İFM AVM silueti, İstanbul ufku ve tek bir final cümlesi — az ama net sahneler daha güçlüdür.",
      benchmark: "Studio DRIFT'in Franchise Freedom işi, drone sürüsünün sadece ışık efekti değil kamusal heykel gibi okunabildiğini gösteriyor.",
      referenceName: "Studio DRIFT - Franchise Freedom",
      referenceNote: "Referans, drone koreografisinin nasıl premium ve sakin bir dille kurulabildiğini gösterir.",
      visualNote: "Kart görseli, İFM cephesini ve plaza aksını tek bir izleme açısında topluyor; drone işinin hangi noktada okunur olacağını anlatmak için kullanılır."
    },
    A02: {
      ...profiles.mapping,
      intro: "Bu iş kurdele kesimini tek başına protokol fotoğrafı olmaktan çıkarıp gerçek açılış cue'suna dönüştürür. Kurdele anında cephe veya ana yüzey aktive olur ve gösterinin resmi başlangıcı herkes tarafından aynı anda algılanır.",
      role: "VIP açılışının resmi başlangıç anıdır. Kurdele, yönetim ve görsel patlama aynı karede buluşur.",
      creative: "Kreatif hedef, kurdele anını büyütmek değil, onu binanın ilk ışık anına çevirmektir. Bu nedenle hareket dili yalın, ritmi güvenli ve prestijli kalmalıdır.",
      benchmark: "Moment Factory benchmark'leri, projection mapping'in en güçlü sonucunu mimarinin kendisini konuya dönüştürdüğünde verdiğini gösteriyor.",
      referenceName: "Projection mapping benchmark",
      referenceNote: "Referans video, mapping'in kitle önünde tek bir başlangıç cue'su gibi kullanılabildiğini okumak için seçildi.",
      visualNote: "Bu görsel, kurdele anının İFM cephe çizgisine nasıl taşınabileceğini ve binanın bir anda show yüzeyine dönüşmesini anlatır."
    },
    A03: {
      ...profiles.kinetic,
      intro: "Bu aktivite, İFM'nin ana iç mekan show'u olarak kurgulanır. Tavanda hareket eden ışık objeleri, açılışın müzik diliyle birlikte çalışır ve mekana yukardan kurulan bir ritim hissi verir.",
      role: "Ana atrium veya yüksek tavanlı iç mekanda merkezi show olarak kullanılır. Kalabalığı tek noktada toplamak için güçlüdür.",
      creative: "Buradaki hedef, 'çok ışık' değil, hacim duygusudur. Tavan büyüklüğü bir zenginlik olarak okunmalı; hareketler kontrollü ve mimariye saygılı kalmalıdır.",
      benchmark: "WHITEvoid benchmark'leri, kinetik sistemlerin doğru trim height ve ritim tasarımıyla sahnenin kendisini değiştirebildiğini gösteriyor.",
      referenceName: "WHITEvoid / kinetic light benchmark",
      referenceNote: "Referans, motorlu ışık sistemlerinin izleyicide nasıl bir ölçek duygusu yarattığını okumak için seçildi.",
      visualNote: "Konsept görsel, İFM atrium tavanında asılı ışık cisimlerinin hangi yoğunlukta kullanılması gerektiğini anlatır."
    },
    A04: {
      ...profiles.aerial,
      intro: "Bu kategori, İFM'nin 'uluslararası booking' beklentisine cevap veren ana sahne performansıdır. Aerial, teknoloji-dans veya ışık temelli yabancı ekip seçimiyle geceye tek bir prestijli sahne anı ekler.",
      role: "VIP açılış gecesinde herkesin dikkatini sahneye toplamak için kullanılır. Basına aktarılabilir bir booking hikayesi üretir.",
      creative: "Seçim, sadece tanınır isim aramak üzerinden değil; İFM'nin kurumsal ve premium diline hangi ekiplerin uyduğu üzerinden yapılmalıdır.",
      benchmark: "Cirque benchmark'ı, havada performansın doğru sahne dilinde hala çok güçlü bir headline olabildiğini gösteriyor.",
      referenceName: "International signature performance benchmark",
      referenceNote: "Video, İFM benzeri premium açılış gecelerinde çalışabilecek bir sahne büyüklüğünü okumak için seçildi.",
      visualNote: "Bu görsel, performansın cephe önünde ya da ana sahnede nasıl premium bir odak anına dönüşeceğini gösterir."
    },
    A05: {
      ...profiles.hologram,
      intro: "Holographic Opening Host, fiziki sunucunun yerine geçen bir numara değil; ana sunucuyu güçlendiren bir açılış katmanıdır. İlk dakikada teknoloji vurgusu verir ve sahne geçişlerini daha temiz hale getirir.",
      role: "VIP açılışında host girişi, protokol anonsu veya açılış filminin ilk giriş cümlesi için kullanılır.",
      creative: "Bu iş fazla uzun tutulmamalıdır. En iyi kullanım biçimi, 45-90 saniyelik net bloklarla 'ilk görünen teknoloji jesti' yaratmaktır.",
      benchmark: "HYPERVSN benchmark'leri, holografik event host uygulamalarının en iyi sonucu kısa, temiz ve kurumsal içerikte verdiğini gösteriyor.",
      referenceName: "HYPERVSN event host benchmark",
      referenceNote: "Referans, holografik karakterin sahnede tek başına değil sunum akışıyla birlikte nasıl kullanıldığını gösterir.",
      visualNote: "Yeni görsel dili, boş koridora çizgi koymak yerine gerçek bir sahne partneri hissi vermelidir."
    },
    A06: {
      ...profiles.laser,
      intro: "Architectural Laser Show, İFM'nin cephesini ve plaza aksını geceleyin okunur bir show çizgisine dönüştürür. Drone veya mapping kadar uzun bir iş olmak zorunda değildir; güçlü bir geçiş ve odak anı olarak kullanılır.",
      role: "Açılış finalinde mapping ile drone arasında veya ana giriş anında gerilim yaratan teknik katmandır.",
      creative: "Lazer dili bina çizgisine saygılı kalmalıdır. Çok renkli bir festival hissi yerine seçili hatları vurgulayan net bir premium dil kurulmalıdır.",
      benchmark: "Architectural laser benchmark'leri, mimariyi örten değil mimariyi okutan bir beam kurgusunun daha sofistike algılandığını gösteriyor.",
      referenceName: "Architectural laser benchmark",
      referenceNote: "Bu video, lazer'in cephe okumasını nasıl büyüttüğünü görmek için seçildi.",
      visualNote: "Konsept görsel, lazerin İFM kuleleri ve avm cephesiyle beraber bir gece silueti oluşturmasını hedefler."
    },
    A07: {
      ...profiles.arrival,
      intro: "Mirror Arrival Tunnel, VIP girişini klasik kırmızı halı kurgusundan alıp daha fotografik ve kontrollü bir deneyime taşır. Giriş, daha mekana gelmeden premium algı kurar.",
      role: "Cemiyet, kiracı ve influencer davetlilerinin geldiği ana VIP aksında kullanılır.",
      creative: "Buradaki hedef 'şovlu tünel' yapmak değil; konuğu daha iyi gösteren yansıma, ışık ve ritim düzeni kurmaktır.",
      benchmark: "Arrival benchmark'lerinde fotoğrafa iyi davranan giriş mekanları, basın görüntüsünde en hızlı farkı yaratan unsurlardan biri oluyor.",
      referenceName: "Arrival tunnel benchmark",
      referenceNote: "Referans video, aynalı ve sonsuzluk hissi veren mekan dilinin nasıl premium bir giriş fonu olduğunu okumak için seçildi.",
      visualNote: "Bu görsel, VIP girişin modüler bir tünel yerine mekan içine entegre premium bir geçiş olarak kurgulanmasını hedefler."
    },
    A08: {
      ...profiles.floor,
      intro: "Interactive Projection Floor, giriş veya atrium hattına hareketle tepki veren bir zemin dili ekler. İş; oyunlaştırma yapmak için değil, giriş akışını daha canlı ve daha okunur hale getirmek için seçilir.",
      role: "Giriş veya yönlendirme aksında kullanılır; davetliyi tek noktada durdurmadan etkinliğin içine alır.",
      creative: "Grafik dili fazla karmaşık olmamalı. Akış, dalga veya İFM çizgisi gibi kolay okunan bir hareket dili daha premium sonuç verir.",
      benchmark: "Moment Factory / SkateMapp benchmark'ı, interaktif zeminin en iyi sonucu beden hareketine basit ve net tepki verince elde ettiğini gösteriyor.",
      referenceName: "Interactive floor benchmark",
      referenceNote: "Referans, zeminin fiziksel trafikle nasıl birlikte çalıştığını okumak için seçildi.",
      visualNote: "Konsept görsel, teknolojiyi oyuncak gibi değil mekanın kendi zemini gibi göstermelidir."
    },
    A09: {
      ...profiles.volumetric,
      intro: "Volumetric Hologram Experience, durup izlenen premium bir istasyondur. Amacı ana show'u tekrar etmek değil; VIP alanda kısa bir teknolojik vitrin etkisi yaratmaktır.",
      role: "Protokol yakınında, lounge girişinde veya VIP karşılama bandında ikinci odak noktası olarak kullanılır.",
      creative: "İçerik, mimari model, İFM AVM, tarih veya açılış mesajı gibi net okunur şeylere dayanmalıdır. Abartılı 3D hareketten kaçınılmalıdır.",
      benchmark: "Volumetric benchmark'leri, cihazdan çok içerik netliğinin izleyicide güven ve prestij hissi yarattığını gösteriyor.",
      referenceName: "Volumetric display benchmark",
      referenceNote: "Referans video, bu teknolojinin yakından izlendiğinde nasıl algılandığını okumak için seçildi.",
      visualNote: "İFM yerleşiminde cihaz bir sergi objesi gibi değil, kontrollü bir premium istasyon gibi durmalıdır."
    },
    A10: {
      ...profiles.arrival,
      intro: "Projection-Mapped Arrival Portal, VIP girişi kendi başına bir etkinlik kapısına dönüştürür. Davetli daha ana alana girmeden önce açılış dilini hisseder.",
      role: "Giriş aksında fotoğraflanan, içeri geçiş kararını sahneye çeviren ana premium portal olarak kullanılır.",
      creative: "Portal fiziksel bir tak olmaktan öte, görsel ve mimari katmanın birleşimi olarak kurulmalıdır. İçerik kısa ve net okunur olmalıdır.",
      benchmark: "Mapping destekli arrival benchmark'leri, davetlinin ilk adımında teknolojiyi hissettiren kapıların basın fotoğrafına doğrudan katkı verdiğini gösteriyor.",
      referenceName: "Projection portal benchmark",
      referenceNote: "Referans, giriş portalinin tek bir foto noktasına değil geçiş anına hizmet ettiğini okumak için seçildi.",
      visualNote: "Konsept görsel, kapının saha dekoru gibi değil İFM'nin resmi giriş ritüeli gibi okunmasını hedefler."
    },
    A11: {
      ...profiles.hologram,
      intro: "Holographic Welcome Totem, statik signage yerine hareketli ve premium bir karşılama objesi sunar. Bilgi, logo ve yönlendirme aynı cihazda toplanabilir.",
      role: "VIP girişte, lounge yakınında veya basın karşılama noktasında kullanılır.",
      creative: "Bu iş, insan boyuna yakın ve sakin durursa premium algılanır. AVM fuar standı gibi bağırmamalı.",
      benchmark: "HYPERVSN benchmark'leri, küçük ve dikey holografik sistemlerin özellikle karşılama, mesaj ve marka vurgusunda güçlü olduğunu gösteriyor.",
      referenceName: "Holographic totem benchmark",
      referenceNote: "Referans, dikey formatta 3D mesaj ve logo göstermenin sahadaki etkisini okumak için seçildi.",
      visualNote: "İFM içinde tek veya çift totem, giriş aksına ritim veren premium bir obje gibi okunmalı."
    },
    A12: {
      ...profiles.arrival,
      intro: "Light Veil Corridor, VIP yürüyüşünü daha yavaş, daha zarif ve daha kontrollü hissettiren bir giriş katmanıdır. Tünel gibi kapatan değil, ışıkla çerçeveleyen bir yaklaşım hedefler.",
      role: "Cemiyet ve influencer girişinde portre çekimlerine iyi davranan premium yürüyüş koridoru olarak konumlanır.",
      creative: "Bu kategoride fazla teknik görünmek yerine atmosfer tasarlamak gerekir. Işık yoğunluğu düşük ama seçici kalmalıdır.",
      benchmark: "Immersive light benchmark'leri, dikey ışık katmanının moda ve premium etkinliklerde güçlü bir arrival dili kurduğunu gösteriyor.",
      referenceName: "Light corridor benchmark",
      referenceNote: "Referans, dikey ışık çizgilerinin yürüme aksını nasıl premiumlaştırdığını okumak için seçildi.",
      visualNote: "Konsept görsel, sert kemerli tünel yerine daha hafif bir ışık geçişi hedeflemelidir."
    },
    A13: {
      ...profiles.immersiveLight,
      intro: "Digital River Flows, avm içindeki hareketi açılış gününe özel bir medya rotasına çevirir. Dekoratif bir projeksiyon değil; mekanın altından akan kurumsal bir akış hissi yaratır.",
      role: "Atrium, plaza veya geniş koridor aksında gün boyu yaşayan bir medya rotası olarak kullanılır.",
      creative: "Grafik dilinde finans akışı, veri, su ve şehir metaforları aynı anda kullanılabilir; ama son görüntü sakin ve kurumsal kalmalıdır.",
      benchmark: "Immersive medya benchmark'leri, mekan tabanlı akış işlerinin ziyaretçiyi durdurmadan etki yaratabildiğini gösteriyor.",
      referenceName: "Digital flow benchmark",
      referenceNote: "Referans, zemin ve su etkisinin beraber kullanıldığında nasıl daha büyük bir alan duygusu yarattığını okumak için seçildi.",
      visualNote: "Konsept görsel, bu işin sadece zemin efekti değil İFM'de bir hareket dili olduğunu anlatmalıdır."
    },
    A14: {
      ...profiles.immersiveLight,
      intro: "Interactive Light Forest, İFM'nin bir koridorunu veya atrium kenarını uzun süre yaşayan bir ışık enstalasyonuna dönüştürür. Ana show değil, gün boyu güçlü kalan premium bir atmosfer işidir.",
      role: "Açılış günü boyunca influencer çekimlerinde, basın turunda ve ziyaretçi akışında sürekli görünen yavaş bir premium instalasyon olarak kullanılır.",
      creative: "Buradaki ışık dili sahne mantığıyla değil, mekan tasarımı mantığıyla kurulmalıdır. Dikey elemanlar İFM'nin mimarisine paralel okunmalıdır.",
      benchmark: "Squidsoup ve benzeri benchmark'ler, binlerce küçük ışık noktasının mekanı tek bir atmosfer objesine çevirebildiğini gösteriyor.",
      referenceName: "Interactive light forest benchmark",
      referenceNote: "Referans video, ziyaretçinin ışıkla ilişkisini ve ışığın mekan içinde nasıl bir derinlik verdiğini okumak için seçildi.",
      visualNote: "Konsept görsel, AVM dekorasyonu değil kurumsal ışık enstalasyonu hissi vermelidir."
    },
    A15: {
      ...profiles.kinetic,
      intro: "Kinetic Sculpture Plaza, açılış alanına hareket eden bir sanat objesi koyar. Etkiyi sahneye değil mekana dağıtmak istendiğinde güçlü bir seçenektir.",
      role: "Plaza veya ana ortak alanda kalıcıya yakın bir geçici imza obje olarak kullanılır.",
      creative: "Objenin görsel dili heykelse ve temiz kalmalı; mekanik hareket estetikten önce gelmemelidir.",
      benchmark: "Kinetik sanat benchmark'leri, iyi seçilmiş tek bir hareketli objenin markanın sofistike algısına büyük katkı verebildiğini gösteriyor.",
      referenceName: "Kinetic sculpture benchmark",
      referenceNote: "Referans, hareketli objenin tek başına nasıl bir odak noktası olabildiğini okumak için seçildi.",
      visualNote: "Bu iş, İFM'de 'sahne prop'u' gibi değil heykel gibi oturmalıdır."
    },
    A16: {
      ...profiles.water,
      intro: "Water Screen Projection, açılış gecesine geçici ama çok hatırlanan bir katman ekler. Sis veya su perdesi üzerindeki görüntü, final ya da geçiş sahnesi için güçlü bir sinema hissi yaratır.",
      role: "Gece programında kısıtlı süreli odak anı veya final geçişi olarak kullanılır.",
      creative: "Bu iş sürekli değil, seçili anda kullanıldığında değerlidir. Fazla uzun tutulursa teknik gösteriye dönüşür.",
      benchmark: "Water screen benchmark'leri, doğru izleme açısında yüksek etkili ama saha planlaması hassas işler olduğunu gösteriyor.",
      referenceName: "Water screen benchmark",
      referenceNote: "Referans, projeksiyonun su perdesi üzerinde nasıl bir volüm kazandığını okumak için seçildi.",
      visualNote: "Konsept görsel, İFM'de su perdesinin nereye bakılarak izlenmesi gerektiğini anlatmalıdır."
    },
    A17: {
      ...profiles.immersiveLight,
      intro: "Suspended Light Cloud, tavanda asılı bir medya bulutu gibi çalışır. Ana sahneye çıkmadan da lüks bir atmosfer kurmak isteniği zaman güçlü bir seçenektir.",
      role: "Yüksek tavanlı geçiş alanlarında ya da lounge yakınında sürekli görünen premium hacim objesi olur.",
      creative: "Bulut dili, çocuksu veya tema-park hissine kaçmamalıdır. Işık yoğunluğu düşük, derinlik algısı yüksek tutulmalıdır.",
      benchmark: "Squidsoup benchmark'leri, asılı ışık noktalarıyla oluşan hacimlerin ziyaretçide doğrudan mekansal bir etki yarattığını gösteriyor.",
      referenceName: "Suspended light benchmark",
      referenceNote: "Referans, yukarıda asılı ışığın tek karede nasıl büyük bir atmosfer objesine dönüştüğünü okumak için seçildi.",
      visualNote: "İFM görselinde bu iş, tavana eklenmiş süs değil hava hacmi gibi okunmalıdır."
    },
    A18: {
      ...profiles.mapping,
      intro: "Generative Media Art Wall, İFM açılışına kurumsal bir medya sanat katmanı ekler. Marka veya leasing iletişimi yapmak yerine mekanın prestijini büyütmek için seçilir.",
      role: "Giriş cephesi, yan duvar veya lounge yakınında medya sanat yüzeyi olarak kullanılır.",
      creative: "İçerik tek bir reklam filmi gibi değil; uzun süre bakılabilen generatif bir akış olarak düşünülmelidir.",
      benchmark: "Moment Factory ve medya sanat benchmark'leri, uzun soluklu duvar içeriğinin reklam değil sanat objesi gibi kurgulandığında daha premium algılandığını gösteriyor.",
      referenceName: "Generative media wall benchmark",
      referenceNote: "Referans, duvar içeriğinin dekorasyondan farklı olarak mekan değerine nasıl katkı verdiğini okumak için seçildi.",
      visualNote: "Konsept görsel, İFM duvarını LED panel gibi değil premium medya sanatı yüzeyi gibi göstermelidir."
    },
    A19: {
      ...profiles.parade,
      intro: "Light Parade, AVM içindeki hareketi tek bir event dili altına toplar. Sadece sahnede kalan açılış programını AVM'nin içine yaymak için kullanılır.",
      role: "Açılış saati boyunca birden fazla noktayı aktive eden gezici performance layer olarak görev alır.",
      creative: "Kostüm, müzik ve rota aynı estetik dilde olmalıdır. Tek tek performerdan çok toplam geçiş resmi önemlidir.",
      benchmark: "LED parade benchmark'leri, hareketli ekiplerin AVM gibi çok odaklı mekanlarda programı tek bir akışa bağlayabildiğini gösteriyor.",
      referenceName: "Light parade benchmark",
      referenceNote: "Referans, gezici ekiplerin kalabalık içinde nasıl bir show rotası kurduğunu okumak için seçildi.",
      visualNote: "Konsept görsel, koridoru kesen değil AVM'nin içinde akan bir parade duygusu vermelidir."
    },
    A20: {
      ...profiles.parade,
      intro: "LED Dancers, sahnede ya da geçiş aksında daha ritmik ve kısa süreli bir görsel show katmanı sunar. DJ, protokol geçişi veya kısa açılış block'u ile rahat eşleşir.",
      role: "Ana sahne öncesi, DJ girişi öncesi ya da parade içindeki duraklarda kullanılabilir.",
      creative: "Burada mesele kostümün parlaması değil, koreografinin net ve kurumsal bir show dili kurmasıdır. Renk paleti İFM'nin gece kimliğine bağlı kalmalıdır.",
      benchmark: "LED dance benchmark'leri, dansın teknolojiyle birleştiğinde kısa sürede yüksek görsel enerji yaratabildiğini gösteriyor.",
      referenceName: "LED dance benchmark",
      referenceNote: "Referans, kısa süreli ama yüksek enerji veren bir sahne katmanını okumak için seçildi.",
      visualNote: "Konsept görsel, bu işi çocuksu glow kostüm olarak değil premium koreografi diliyle göstermelidir."
    },
    A21: {
      ...profiles.aerial,
      intro: "Flying Musicians / Floating Orchestra, İFM'nin daha rafine ve beklenmedik bir sahne anı aradığı yerde kullanılır. Müzik ile havadaki performans birleştiğinde gece daha kültürel ve daha lüks bir seviyeye çıkar.",
      role: "VIP açılış programında daha seçkin bir ton istendiğinde ana sahneye alternatif headline olabilir.",
      creative: "Bu seçenek, kalabalık enerji yerine zarafet aranan noktada değerlidir. Müzik ve aerial aynı anda sahnelediği zaman fark yaratır.",
      benchmark: "Aerial performance benchmark'leri, canlı müzikle birleştiğinde bu kategorinin sırf görsel değil 'olay' olarak algılandığını gösteriyor.",
      referenceName: "Floating orchestra benchmark",
      referenceNote: "Referans, yukarıda asılı performans ile canlı müziğin aynı anda nasıl premium bir an yarattığını okumak için seçildi.",
      visualNote: "Bu iş için üretilen görsel, çizgisel placeholder değil gerçekten havada konumlanmış bir performans anı gibi okunmalıdır."
    },
    A22: {
      ...profiles.parade,
      intro: "LED Percussion Procession, sesin ve hareketin AVM içinde birlikte yürüdüğü daha ritmik bir performans katmanı sunar. Light Parade'e göre daha güçlü ses izi bırakır.",
      role: "Geçiş akslarında kalabalığı hareket ettirmek ve programı bir noktadan diğerine taşımak için kullanılır.",
      creative: "Perküsyon ekibi fazla festival tonuna kaçmadan, daha temiz ve keskin bir performans diliyle kurgulanmalıdır.",
      benchmark: "Perküsyon benchmark'leri, ritmin hareketli rota işlerinde izleyiciyi toplamak için en etkili araç olduğunu gösteriyor.",
      referenceName: "LED percussion benchmark",
      referenceNote: "Referans, hareketli ritim ekibinin AVM veya açık alan aksında nasıl enerji kurduğunu okumak için seçildi.",
      visualNote: "Konsept görsel, ışık ve davulun beraber aktığı bir geçiş anı vermelidir."
    },
    A23: {
      ...profiles.wristband,
      intro: "Synchronized LED Wristband Finale, izleyiciyi sadece seyreden değil finalin parçası olan bir kitleye çevirir. VIP ve public açılış arasında duygusal ortak an yaratmak için güçlüdür.",
      role: "Countdown, DJ finali, drone veya kapanış anonsuyla birlikte kullanıldığında gecenin hafızada kalan ortak ritüeli olur.",
      creative: "Bileklikler dekor gibi dağıtılmamalı; final dramaturjisinin bir parçası olarak yazılmalıdır. Bir renk hikayesi ve net cue planı gerekir.",
      benchmark: "PixMob benchmark'leri, kitle ışığının final anında binlerce kişiyi aynı karede birleştirebildiğini gösteriyor.",
      referenceName: "PixMob crowd lighting benchmark",
      referenceNote: "Referans, toplu LED cue'nun konser ölçeğindeki etkisini okumak için seçildi.",
      visualNote: "Konsept görsel, İFM finalinde eldeki ışığın tek bir kitle resmi yaratmasını hedeflemelidir."
    },
    A24: {
      ...profiles.laserHarp,
      intro: "Laser Harp Performance, klasik DJ veya solo müzik act'ine göre daha teknolojik ve daha teatral bir ara an yaratır. Kısa süreli ama hatırlanan teknoloji performansıdır.",
      role: "Ana final öncesi tempo değişimi, VIP segmenti veya DJ girişi öncesi teknoloji moment'i olarak kullanılır.",
      creative: "Bu iş kısa tutulduğunda güçlüdür. Lazer enstrüman etkisi, İFM'nin teknoloji ve prestij diliyle uyumlu şekilde olgun bir tasarımla sunulmalıdır.",
      benchmark: "Laser harp benchmark'leri, teknoloji temelli solo performansların sahnede hem müzik hem görsellik üretebildiğini gösteriyor.",
      referenceName: "Laser harp benchmark",
      referenceNote: "Referans, sahnede tek artist ile dahi premium bir teknoloji anı kurulabildiğini okumak için seçildi.",
      visualNote: "Konsept görsel, bu işi çizgisel demo gibi değil karanlıkta odaklanan sahne anı gibi göstermelidir."
    }
  };
})();
