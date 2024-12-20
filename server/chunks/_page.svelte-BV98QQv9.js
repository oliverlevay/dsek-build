import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { M as MembersList } from './MembersList-zLUyjk5A.js';
import { jO as nollning_title, jP as nollning_landing_hello_body, jQ as nollning_landing_hello_title, jR as nollning_landing_policy_header, jS as nollning_landing_policy_subtitle, jT as nollning_landing_policy_lines_1, jU as nollning_landing_policy_lines_2, jV as nollning_landing_policy_lines_3, jW as nollning_landing_policy_lines_4, jX as nollning_landing_policy_readMore, jY as nollning_landing_policy_read, jZ as nollning_landing_lore_title, j_ as nollning_landing_lore_body, j$ as phadderGroups, k0 as nollor, k1 as phaddrar } from './messages-D8OfyZiq.js';
import { s as swirl, e as eye } from './swirl-BMYdv2-W.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import 'tailwind-merge';

const PersonCarouselItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newLines;
  let { stab = false } = $$props;
  let { name } = $$props;
  let { body = "" } = $$props;
  let { imageUrl = "" } = $$props;
  let { index } = $$props;
  let { max = stab ? 6 : 11 } = $$props;
  let { prefix = `${stab ? "stab" : "pepp"}slide` } = $$props;
  let { font = stab ? "font-nolla-stab text-3xl tracking-widest" : "font-nolla-pepp tracking-wider text-4xl" } = $$props;
  let { rounded = true } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.stab === void 0 && $$bindings.stab && stab !== void 0) $$bindings.stab(stab);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0) $$bindings.body(body);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0) $$bindings.imageUrl(imageUrl);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0) $$bindings.prefix(prefix);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0) $$bindings.font(font);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  newLines = name.split("\n").length - 1;
  return `<div id="${escape(prefix, true) + escape(index, true)}" class="relative w-full scroll-my-20 flex-col items-center max-md:carousel-item md:flex"><div class="mb-4 flex gap-1 md:hidden"> ${each(new Array(max).fill(0), (_, i) => {
    return `<div class="${[
      "size-2 rounded-full",
      (i === index ? "bg-base-content" : "") + " " + (i !== index ? "bg-base-200" : "")
    ].join(" ").trim()}"></div>`;
  })}</div> <figure class="${[
    "relative mb-8 aspect-square w-[calc(100%-6rem)] border-none md:w-64",
    (rounded ? "rounded-full" : "") + " " + (!rounded ? "rounded-btn" : "")
  ].join(" ").trim()}"><div class="absolute -inset-x-12 top-1/2 flex -translate-y-1/2 transform justify-between md:hidden">${index > 0 ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`#${prefix}${index - 1}`, void 0), 0)} class="p-6 px-4">❮</a>` : `<div></div>`} ${index < max - 1 ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`#${prefix}${index + 1}`, void 0), 0)} class="p-6 px-4">❯</a>` : ``}</div> <img${add_attribute("src", imageUrl, 0)}${add_attribute("alt", name, 0)} class="${[
    "aspect-square h-full w-full object-cover",
    (rounded ? "rounded-full" : "") + " " + (rounded ? "object-cover" : "") + " " + (!rounded ? "object-contain" : "") + " " + (!rounded ? "rounded-btn" : "")
  ].join(" ").trim()}"></figure> <h3 class="${"mb-4 text-center font-medium " + escape(font, true) + " rounded-btn p-2"}" style="${"margin-top: -" + escape(newLines * 1.2, true) + "em"}"> <!-- HTML_TAG_START -->${name.replaceAll("\n", "<br />")}<!-- HTML_TAG_END --></h3> <p class="nolla-prose max-w-prose rounded-btn p-2 text-center max-md:mx-6"> <!-- HTML_TAG_START -->${body.replaceAll("\n", "<br />")}<!-- HTML_TAG_END --></p> ${slots.default ? slots.default({}) : ``}</div>`;
});
const arux = "/_app/immutable/assets/staben24_Arux.CdwJtPfW.webp";
const celesta = "/_app/immutable/assets/staben24_Celesta.CEtPSiFf.webp";
const macro = "/_app/immutable/assets/staben24_Macro.B8oOnQfy.webp";
const imre = "/_app/immutable/assets/staben24_ImRe.Bq8EorqV.webp";
const volto = "/_app/immutable/assets/staben24_Volto.Cw5QAfeH.webp";
const lostrego = "/_app/immutable/assets/staben24_Lostrego.8A-u0zq3.webp";
const groupProfile = "/_app/immutable/assets/staben24_9x16.Ckz4fTVO.webp";
const groupLandscape = "/_app/immutable/assets/staben24_16x9.6Qu5U2hw.webp";
const stormBg = "/_app/immutable/assets/storm_bg.CKwlDxOP.webp";
const alexander = "/_app/immutable/assets/alexander.CKvI6MFz.webp";
const axel = "/_app/immutable/assets/axel.BsGS6anV.webp";
const casper = "/_app/immutable/assets/casper.9GQ71htr.webp";
const emil = "/_app/immutable/assets/emil.DeqXaNLo.webp";
const gustaf = "/_app/immutable/assets/gustaf.BctEhAwa.webp";
const jacob = "/_app/immutable/assets/jacob.DQeZtZ7a.webp";
const klara = "/_app/immutable/assets/klara.korxZ43M.webp";
const linn = "/_app/immutable/assets/linn.D6xQ5BPM.webp";
const lola = "/_app/immutable/assets/lola.Cv1wHYil.webp";
const thyra = "/_app/immutable/assets/thyra.DgqneqxV.webp";
const wilma = "/_app/immutable/assets/wilma.yP9ekC8b.webp";
const cowprint = "/_app/immutable/assets/cowprint.D0LXU7zy.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topInsets;
  let bottomInsets;
  let headerAndFooterHeight;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const stab = [
    {
      name: "Øverphøs\nArux ToniTribus",
      imageUrl: arux,
      body: `Det var inte länge sedan Arux själv upplevde kaosets och elektricitetens förödande krafter. Då lyckades han inte kontrollera den, men denna gång hade han Staben vid sin sida. Som øverphøs leder han staben för att beskydda nollorna och med dem vid sin sida var det bara en tidsfråga innan stormen skulle vara under kontroll och nollningen skulle räddas.`,
      bodyEn: "It wasn't long ago that Arux himself experienced the devastating forces of chaos and electricity. Back then, he couldn't control it, but this time he had the Staff by his side. As the øverphøs, he leads the staff to protect the nollor, and with them by his side, it was only a matter of time before the storm would be under control and the nollning would be saved."
    },
    {
      name: "ImRe Daemon",
      imageUrl: imre,
      body: `I stormiga tider är det ImRe som ser till att Staben alltid är skyddade mot regnets hårda slag. Hon tämjer blixtens energi och använder den för att skapa nya objekt som bärs av såväl n0lla som Stab. Precis som hennes namn indikerar så agerar ImRe ofta i bakgrunden och ser till att inget och ingen glöms. ImRes förmåga att hantera komplexa krafter och problem gör henne till en viktigt del av Staben.`,
      bodyEn: "In stormy times, it is ImRe who ensures that the Stab are always protected from the harsh blows of the rain. She tames the energy of lightning and uses it to create new objects worn by both n0lla and the Stab. As her name suggests, ImRe often works in the background, making sure that nothing and no one is forgotten. ImRe's ability to handle complex forces and problems makes her an important part of the Stab."
    },
    {
      name: "Volto RefacTor",
      imageUrl: volto,
      body: `Volto är mästaren bakom kulisserna när det gäller att organisera event och se till att n0llorna har de förutsättningar som krävs för att lyckas med sina uppdrag, oavsett hur stormigt det blir. Genom att göra detta kan lugnet i stormens öga fortsätta och nollningens aktiviteter förhindras ej av turbulens och väder. Därför är Volto viktig för att se till att stormen som spänt väntar aldrig passerar nollningens gränser.`,
      bodyEn: "Volto is the master behind the scenes when it comes to organizing events and ensuring that the n0llor have the necessary conditions to succeed in their missions, no matter how stormy it gets. By doing this, the calm in the eye of the storm can continue, and the nollning's activities are not hindered by turbulence and weather. Therefore, Volto is essential to ensure that the storm, which eagerly awaits, never crosses the nollning's boundaries."
    },
    {
      name: "Lostrego MutatI/O",
      imageUrl: lostrego,
      body: `Som en sann nattens väktare arbetar Lostrego bäst när andra sover. När mörkret faller tar han sig an stormens kaos, lugnar vindarna och ser till att n0llorna kommer hem tryggt. Med honom i Staben dröjer sig inga orosmoln kvar när klockan passerat tolv.`,
      bodyEn: "As a true guardian of the night, Lostrego works best when others are asleep. When darkness falls, he takes on the chaos of the storm, calms the winds, and ensures that the n0llor return home safely. With him in the Staff, no storm clouds linger once the clock strikes midnight."
    },
    {
      name: "Macro Tempestas",
      imageUrl: macro,
      body: `För länge sedan, när storken — bärandes på lilla Macro i sin näbb — flög genom ett tungt och mörkt åskmoln , slog blixtarna till och ur molnets djup slets Macro från storkens grepp. Därför blev Macro som han blev. Macro är Stabens beskyddare av det digitala; när koden verkar få eget liv är det Macro som i blixtens hastighet löser buggar. Han vakar även över våra phaddrar, ständigt uppkopplad och alltid redo att rycka in. Med Macro på sin sida kan Staben vara säker på att alla tekniska stormar snabbt blåser över.`,
      bodyEn: "Long ago, when the stork—carrying little Macro in its beak—flew through a heavy and dark thundercloud, the lightning struck, and from the depths of the cloud, Macro was torn from the stork's grip. That's why Macro became who he is. Macro is the protector of the digital realm; when the code seems to take on a life of its own, it is Macro who solves bugs at lightning speed. He also watches over our phaddrar, constantly connected and always ready to step in. With Macro on their side, the Staff can be sure that all technical storms quickly blow over."
    },
    {
      name: "Celsta VentUX",
      imageUrl: celesta,
      body: `Celesta trädde fram ur stormen, och såg till att ingen viktig information försvann i dess virvlar. Med sin noggranna och uppmärksamma natur låter hon aldrig något undgå henne, även när tårarna faller som regn. Hon hanterar känslostormar, både sina egna och andras med en obeveklig styrka. Ingen storm, varken av regn eller tårar, är för stor för henne att bemästra.`,
      bodyEn: "Celesta emerged from the storm, ensuring that no important information was lost in its whirlwinds. With her meticulous and attentive nature, she never lets anything escape her, even when tears fall like rain. She handles emotional storms, both her own and others', with unwavering strength. No storm, whether of rain or tears, is too great for her to master."
    }
  ];
  const peppers = [
    {
      name: "Sasha",
      imageUrl: alexander,
      body: `Howdy howdy!! Alexander heter jag aka Sasha aka Mami! Jag är Øverpeppare i år tillsammans med Thyra. Jag har varit med om 24 snurrar runt solen och är från Lund!! Jag börjar nu mitt tredje år på InfoCom.

Mitt tips till er är - njut av resan och släpp loss på saloonen!! Ingen cowboy lever bara för plugget. Se till att också ha roligt!! Hasta la vista!`,
      bodyEn: "Howdy howdy!! My name is Alexander aka Sasha aka Mami! I'm a Head Pepper this year together with Thyra. I've been around the sun 24 times and I'm from Lund!! I'm now starting my third year in InfoCom.\n\nMy tip for you is - enjoy the journey and let loose at the saloon!! No cowboy lives just for studying. Make sure to have fun too!! Hasta la vista!"
    },
    {
      name: "Thyra",
      imageUrl: thyra,
      body: `Tjenixen! Jag heter Thyra och är Øverpeppare tillsammans med Sasha <3. Jag är 22 år gammal, kommer ursprungligen från gamla fina Örebro och ska nu börja mitt tredje år på data.

Alla äventyr som n0llningen erbjuder måste ju självklart ha ett soundtrack. Mitt tips är därför en riktigt najs spellista som får dig peppad och redo för dagen! Vi hörs!`,
      bodyEn: "Hey there! My name is Thyra and I'm a Head Pepper together with Sasha <3. I'm 22 years old, originally from the lovely old Örebro, and I'm about to start my third year in computer science.\n\nAll the adventures that n0llningen offers definitely need a soundtrack. So my tip is to create a really nice playlist that gets you pumped and ready for the day! See you around!"
    },
    {
      name: "Axel",
      imageUrl: axel,
      body: `Hej kompisar! Jag är Axel Magnusson, stockholmare, 25 år jättegammal och sedan ett år tillbaka blivande Civilingenjör i Datateknik! Mitt bästa tips för att inte ramla av hästen under nollningen är att välja sina dueller. Även den tuffaste av cowboys måste vila upp sig ibland - man kan inte galoppera utan sömn! `,
      bodyEn: "Hey friends! I'm Axel Magnusson, a 25-year-old Stockholm native, and soon-to-be Master of Science in Computer Engineering! My best tip to avoid falling off the horse during nollningen is to pick your battles. Even the toughest cowboys need to rest sometimes - you can't gallop without sleep!"
    },
    {
      name: "Klara",
      imageUrl: klara,
      body: `Hej! Klara här, 24 år, men det är så många andra snygga Klaror här på sektionen så Högen/Högis går också bra. Är från en liten ö i Stockholm (Södermalm) men pluggar nu trean på InfoCom.

För att stå stadigt i stövlarna är mitt tips att alla här är lika sugna på att lära känna nya människor -  så våga ta första steget och fyll din flock med andra cowboys!`,
      bodyEn: "Hi! Klara here, 24 years old, but since there are so many other good-looking Klaras in the guild, you can also call me Högen/Högis. I'm from a small island in Stockholm (Södermalm) but now I'm in my third year in InfoCom.\n\nTo stay steady in your boots, my tip is that everyone here is just as eager to meet new people - so don't be afraid to take the first step and fill your group with other cowboys!"
    },
    {
      name: "Casper",
      imageUrl: casper,
      body: `Hallojsan framtida vänner! Casper va namnet, 21 år gammal från härliga Stockholm, Nacka o ska börja andra året på data här i Lund Jag rekommenderar starkt att hitta en stabil plats o slå läger när man ska plugga. Det finns många vilda cowboys här på campus så konkurrensen är tuff. Om du inte vet vart du kan sitta så kan du alltid fråga mig!`,
      bodyEn: "Hey there future friends! The name's Casper, 21 years old from the lovely Stockholm, Nacka, and about to start my second year in computer science here in Lund I highly recommend finding a stable spot to set up camp when you're studying. There are a lot of wild cowboys here on campus so competition is tough. If you don't know where to sit, you can always ask me!"
    },
    {
      name: "Wilma",
      imageUrl: wilma,
      body: `Tja! Wilma heter jag, är en 20 årig andraårsstudent på data och kommer (tyyyyyp) från Stockholm!!

Här i vilda västern kan det vara svårt för en nybliven cowboy att hitta rätt. Mitt bästa tips är därför att fråga alla rutinerade studenter om allt möjligt: vilka böcker som inte behövs, vilken nation som de gillar mest, eller vart man hittar Lunds bästa falafel. Ha så kul, kram!!`,
      bodyEn: "Hey! My name is Wilma, I'm a 20-year-old second-year computer science student and I'm (tyyyyyp) from Stockholm!!\n\nHere in the wild west, it can be hard for a new cowboy to find their way. My best tip is to ask all the experienced students about anything: which books you don't need, which nation they like the most, or where to find the best falafel in Lund. Have fun, hugs!!"
    },
    {
      name: "Emil",
      imageUrl: emil,
      body: `Howdy! Emil heter jag, kallas även Nubben, är 27 år gammal och kommer från Borås. Går nu mitt sjätte år på InfoCom! För att just du ska ha en fantastisk nollning i västern så är mitt främsta tips att våga bjuda på er själva lite extra under nollningen! Det är så man hittar sina framtida studiecowboys och något man kommer ha kvar för livet <3`,
      bodyEn: "Howdy! My name is Emil, also known as Nubben, I'm 27 years old and from Borås. I'm now in my sixth year in InfoCom! For you to have an amazing nollning in the west, my top tip is to dare to put yourself out there a little extra during nollningen! That's how you find your future study cowboys, and it's something you'll have for life <3"
    },
    {
      name: "Linn",
      imageUrl: linn,
      body: `Heej där! Linn heter jag, är 21 bast från Täby och nu glider jag in i andra året på InfoCom!!

När man ridit genom ett blåsigt vilda västern, är det skönt att ha laddat upp med färdiglagade matlador. Kanske testa cowboysopp`,
      bodyEn: "Hey there! My name is Linn, I'm 21 years old from Täby and now I'm sliding into my second year in InfoCom!!\n\nWhen you've ridden through a windy wild west, it's nice to have stocked up on pre-prepared meals. Maybe try cowboy stew?"
    },
    {
      name: "Gustaf",
      imageUrl: gustaf,
      body: `Tja! Det är jag som är Gustaf JensEn och jag är en peppande cowboy som ibland pluggar Data, numera år 3! Innan jag red ned till Lund härjade jag på sumpans gator i Stockholm!

En cowboy ska veta sina begränsningar! Åk därför inte Voi på vargtimmen, vi glömmer aldrig våra fallna bröder som vaknat upp på sjukan med en extra donation till tandfen.`,
      bodyEn: "Hey! I'm Gustaf Jensen, and I'm a peppy cowboy who sometimes studies computer science, now in year 3! Before I rode down to Lund, I roamed the streets of Sundbyberg in Stockholm!\n\nA cowboy should know their limits! So don't ride a Voi scooter at the wolf hour; we'll never forget our fallen brothers who woke up in the hospital with an extra donation to the tooth fairy."
    },
    {
      name: "Lola",
      imageUrl: lola,
      body: `Hej hej! Lola heter jag (Aurora är mitt goverment name men vi skiter i det). Jag är en hela 21 år gammal, är från Malmö och går mitt fjärde år på data( klarar du första året så har du redan mer HP än mig).  

Mitt bästa tips för att bli en stabil cowboy är att försök att undvika sista minuten tenta-plugget, tänk på hur många fler saloons man kan gå på medan alla andra omtenta pluggar!`,
      bodyEn: "Hey hey! My name is Lola (Aurora is my government name but let's not worry about that). I'm a whole 21 years old, from Malmö, and I'm in my fourth year in computer science (if you survive the first year, you've already earned more credits than I have).\n\nMy best tip for becoming a stable cowboy is to try to avoid last-minute exam cramming, think about how many more saloons you can visit while everyone else is cramming for retakes!"
    },
    {
      name: "Jacobi",
      imageUrl: jacob,
      body: `Hallå ja! Jacob heter jag, men kalla mig gärna för Jacobi. Jag är 23 år och går tredje året på InfoCom.
Ett tips för att lätt kunna Gallopera genom nollningen är att ha en fungerande cykel. Då går det mycket snabbare att komma fram till eventen, men även att komma hem för att få så mycket välbehövlig vila som möjligt.`,
      bodyEn: "Hello there! My name is Jacob, but feel free to call me Jacobi. I'm 23 years old and in my third year in InfoCom.\nA tip for easily galloping through nollningen is to have a functioning bike. That way, you'll get to events much faster and can get home quickly for some much-needed rest."
    }
  ];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  topInsets = ($page.data.appInfo?.insets?.top ?? 0) + 8;
  bottomInsets = $page.data.appInfo?.insets?.bottom ?? 0;
  headerAndFooterHeight = 128 + topInsets + bottomInsets;
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Nollning" }, {}, {})} <article class="-m-6 space-y-16 overflow-hidden p-6">${data.revealTheme ? `<div class="-mx-6 -my-6"${add_attribute("style", `height: calc(100dvh - ${data.isApp ? headerAndFooterHeight + "px" : "4rem"}); `, 0)}><figure class="relative h-full w-full overflow-hidden border-none bg-neutral"><div class="h-full w-full bg-cover bg-center bg-no-repeat max-md:bg-scroll md:hidden md:bg-fixed" style="${"background-image: url('" + escape(groupProfile, true) + "'); box-shadow: inset 0 -100px 100px -100px #303B70;"}"></div> <div class="hidden h-full w-full bg-cover bg-center bg-no-repeat max-md:bg-scroll md:block md:bg-fixed" style="${"background-image: url('" + escape(groupLandscape, true) + "'); box-shadow: inset 0 -100px 100px -100px #303B70;"}"></div> <span class="absolute inset-x-4 bottom-10 hidden max-w-full transform text-center font-nolla-stab text-7xl leading-snug md:block lg:text-8xl"> <!-- HTML_TAG_START -->${nollning_title().replace("\n", " ")}<!-- HTML_TAG_END --></span> <span class="absolute inset-x-4 bottom-10 max-w-full transform text-center font-nolla-stab text-6xl leading-snug md:hidden md:text-8xl"> <!-- HTML_TAG_START -->${nollning_title().replace("\n", "<br />")}<!-- HTML_TAG_END --></span></figure></div>` : ``}  <div class="mx-auto max-w-screen-md"><section class="flex flex-col"><h3 class="page-title !text-3xl text-secondary">${escape(nollning_landing_hello_title())}</h3> <p class="nolla-prose"> <!-- HTML_TAG_START -->${nollning_landing_hello_body()}<!-- HTML_TAG_END --></p></section> <section class="mb-24 mt-8 flex flex-col"><h3 class="page-title mb-4 !text-3xl text-secondary">${escape(nollning_landing_policy_header())}</h3> <p class="nolla-prose">${escape(nollning_landing_policy_subtitle())}</p> <ul class="list-inside list-disc leading-relaxed"><li>${escape(nollning_landing_policy_lines_1())}</li> <li>${escape(nollning_landing_policy_lines_2())}</li> <li>${escape(nollning_landing_policy_lines_3())}</li> <li>${escape(nollning_landing_policy_lines_4())}</li></ul> <p class="nolla-prose">${escape(nollning_landing_policy_readMore())}</p> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://minio.api.dsek.se/files/public/miscellaneous/rights-${languageTag()}.pdf`, void 0), 0)} class="btn-primary-dark btn self-start">${escape(nollning_landing_policy_read())}</a></section> ${data.revealTheme ? `<div class="relative mx-auto mb-0 mt-12 size-60 md:size-80" data-svelte-h="svelte-jbx7rp"><img${add_attribute("src", swirl, 0)} class="absolute inset-0 animate-[reverse-spin_30s_linear_infinite]" alt="Nollning logo spinning"> <img${add_attribute("src", eye, 0)} class="absolute inset-0" alt="Nollning logo non-spinning"></div> <section><h3 class="page-title font-nolla-stab !text-4xl text-secondary">${escape(nollning_landing_lore_title())}</h3> <p class="nolla-prose">${escape(nollning_landing_lore_body())}</p> <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/cHuM8WgDBuA?si=cCNMW7Hktij8qJCb" title="Reveal film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></section> <section class="relative !my-16 !mb-20 flex min-h-dvh flex-col items-center" id="staben"><div class="absolute -inset-x-[50dvw] -inset-y-10 z-0 bg-cover bg-center bg-no-repeat opacity-15 max-md:bg-scroll md:bg-fixed"${add_attribute("style", `background-image: url('${stormBg}')`, 0)}></div> <h1 class="z-10 mb-4 rounded-btn p-2 text-center font-nolla-stab text-8xl tracking-wider md:text-9xl" data-svelte-h="svelte-1983cy0">Staben</h1> <div class="z-0 -mt-20 w-full scroll-smooth bg-transparent pt-20 max-md:carousel md:grid md:grid-cols-2 md:gap-4 lg:w-[calc(100%+8rem)] lg:grid-cols-3">${each(stab, (stab2, index) => {
    return `${validate_component(PersonCarouselItem, "PersonCarouselItem").$$render(
      $$result,
      {
        stab: true,
        name: stab2.name,
        index,
        imageUrl: stab2.imageUrl,
        body: languageTag() === "en" ? stab2.bodyEn : stab2.body
      },
      {},
      {}
    )}`;
  })}</div></section>` : ``} <section class="${[
    "relative !mb-32 flex min-h-dvh flex-col items-center max-md:-mx-6",
    data.revealTheme ? "!mt-16" : ""
  ].join(" ").trim()}" id="peppers"><div class="absolute -inset-x-[50dvw] -inset-y-10 -z-0 opacity-15 max-md:bg-[length:32rem] max-md:bg-scroll md:bg-[length:48rem] md:bg-fixed"${add_attribute("style", `background-image: url('${cowprint}')`, 0)}></div> <h1 class="z-10 mb-4 rounded-btn p-2 text-center font-nolla-pepp text-5xl md:text-8xl" data-svelte-h="svelte-19bim9k">Los Peppos</h1> <div class="-mt-20 w-full scroll-m-20 pt-20 max-md:carousel max-md:!flex md:grid md:grid-cols-2 md:gap-4 lg:w-[calc(100%+8rem)] lg:grid-cols-3">${each(peppers, (pepper, index) => {
    return `${validate_component(PersonCarouselItem, "PersonCarouselItem").$$render(
      $$result,
      {
        name: pepper.name,
        index,
        imageUrl: pepper.imageUrl,
        body: languageTag() === "en" ? pepper.bodyEn : pepper.body
      },
      {},
      {}
    )}`;
  })}</div></section> <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/_deOj_g85ds?si=NykuDAlVUHnBeokz" title="Nolledans film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <section class="mt-16 flex flex-col items-center"><h1 class="mb-16 text-3xl font-medium">${escape(phadderGroups())}</h1> <div class="-mt-20 w-full scroll-smooth pt-20 max-md:carousel md:grid md:grid-cols-2 md:gap-4 lg:w-[calc(100%+8rem)] lg:grid-cols-3">${each(data.phadderGroups, (group, index) => {
    return `${validate_component(PersonCarouselItem, "PersonCarouselItem").$$render(
      $$result,
      {
        name: group.name,
        body: group.description ?? "",
        imageUrl: group.imageUrl ?? "",
        index,
        max: data.phadderGroups.length,
        prefix: "groupslide",
        font: "text-2xl font-medium",
        rounded: false
      },
      {},
      {
        default: () => {
          return `<div class="mt-2 flex justify-center gap-2">${validate_component(MembersList, "MembersList").$$render(
            $$result,
            {
              class: "btn btn-outline btn-sm",
              members: group.nollor
            },
            {},
            {
              default: () => {
                return `${escape(nollor())}`;
              }
            }
          )} ${validate_component(MembersList, "MembersList").$$render(
            $$result,
            {
              class: "btn btn-outline btn-sm",
              members: group.phaddrar.map((p) => p.member)
            },
            {},
            {
              default: () => {
                return `${escape(phaddrar())}`;
              }
            }
          )} </div>`;
        }
      }
    )}`;
  })}</div></section></div></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BV98QQv9.js.map
