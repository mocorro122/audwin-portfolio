"use strict";

const portfolioData = [
  {
    id: "web-development",
    title: "Web Development Portfolio",
    category: "Web Development",
    description:
      "Responsive websites, landing pages, business sites, and custom front-end experiences.",
  
    projects: [
      {
        title: "Red Hills Dental",
    type: "Dental Clinic Website",
        image: "assets__images__web-01.webp",
        url: "https://sgsmiles.com/",
        description: "Red Hills Dental is a modern, patient-focused dental website designed to showcase the clinic's services, introduce the dental team, provide educational resources, and simplify online appointment booking. The logo was created using Adobe Illustrator, the UI/UX design was crafted in Figma, and the website was developed in WordPress."   },
      {
        title: "PhD Orthodontics",
        type: "Dental Clinic Website",
        image: "assets__images__web-02.webp",
        url: "https://phdorthodontics.com/",
        description: "PhD Orthodontics is a modern orthodontic website designed to showcase specialized orthodontic services, educate patients, and simplify online appointment scheduling. The project features a clean, professional, and responsive design that enhances the overall user experience. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the practice's commitment to exceptional orthodontic care.."
      },
      {
        title: "North Eye Center",
        type: "Optometry Website",
        image: "assets__images__web-03.webp",
        url: "https://northstareyecare.com/",
        description: "North Star Eye Care is a modern optometry website designed to showcase comprehensive vision care services, educate patients, and provide a seamless online appointment experience. The project features a clean, professional, and responsive design that enhances accessibility and user experience. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the practice's commitment to personalized, high-quality eye care."
      },
      {
        title: "Almost Home",
        type: "Home Design & Renovation Website",
        image: "assets__images__web-04.webp",
        url: "https://almosthomerolla.com/",
        description: "Almost Home is a modern home design and renovation website created to showcase premium building materials, interior and exterior design solutions, custom millwork, and concierge-level renovation services. The project features a clean, elegant, and responsive design that highlights the company's expertise while providing homeowners and contractors with an intuitive browsing experience. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the brand's commitment to quality craftsmanship, personalized service, and exceptional home improvement solutions."
      },
      {
        title: "Heighway Associates Architects (HAA)",
        type: "Architecture Firm Website",
        image: "assets__images__web-05.webp",
        url: "https://haa-ltd.co.uk/",
        description: "Heighway Associates Architects (HAA) is a modern architecture firm website designed to showcase residential and commercial architectural projects, highlight the firm's comprehensive design services, and guide clients through every stage of the building process. The project features a clean, elegant, and responsive design that emphasizes visual storytelling, user experience, and accessibility. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the firm's commitment to innovative design, technical excellence, and client-focused architectural solutions."
      },
      {
        title: "Community Chiropractic Center",
        type: "Chiropractic Clinic Website",
        image: "assets__images__web-06.webp",
        url: "https://cccpoway.com/",
        description: "Community Chiropractic Center is a modern chiropractic website designed to showcase comprehensive chiropractic care, massage therapy, spinal decompression, and wellness services while providing patients with an easy way to learn about treatments and request appointments. The project features a clean, professional, and responsive design that enhances accessibility and user experience. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the clinic's commitment to personalized, high-quality chiropractic care and overall wellness."
      },
      {
        title: "Kennedy Vision Health Center",
        type: "Optometry Website",
        url: "https://kennedyvision.com/",
        image: "assets__images__web-07.webp",
        description: "Kennedy Vision Health Center is a modern optometry website designed to showcase comprehensive eye care services, advanced diagnostic technology, and personalized vision solutions for patients of all ages. The project features a clean, professional, and responsive design that enhances accessibility, simplifies appointment scheduling, and delivers an exceptional user experience. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the practice's commitment to innovative technology, preventive eye care, and lifelong vision health."
      },
      {
        title: "Harvester Animal Clinic",
        type: "Veterinary Clinic Website",
        url: "https://harvesteranimalclinic.com/",
        image: "assets__images__web-08.webp",
        description: "Harvester Animal Clinic is a modern veterinary website designed to showcase comprehensive pet healthcare services, advanced surgical procedures, emergency care, and preventive wellness programs for dogs, cats, and small animals. The project features a clean, professional, and responsive design that allows pet owners to easily explore services, meet the veterinary team, and schedule appointments online. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the clinic's commitment to compassionate, family-oriented, and high-quality veterinary care."
      },
      {
        title: "San Mateo Dental Care",
        type: "Dental Clinic Website",
        image: "assets__images__web-09.webp",
        url: "https://yoursanmateodentist.com/",
        description: "San Mateo Dental Care is a modern dental clinic website designed to showcase comprehensive dental services, advanced treatment technology, and personalized oral healthcare for patients of all ages. The project features a clean, professional, and responsive design that makes it easy for patients to explore services, learn about the dental team, and schedule appointments online. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the practice's commitment to exceptional patient care, innovative dentistry, and comfortable treatment experiences."
      },
      {
        title: "Yankee Hill Veterinary Hospital",
        type: "Veterinary Hospital Website",
        url: "https://yankeehillvet.com/",
        image: "assets__images__web-10.webp",
        description: "Yankee Hill Veterinary Hospital is a modern veterinary website designed to showcase comprehensive pet healthcare services, including preventive wellness, surgery, diagnostics, emergency care, dental services, and specialized treatments. The project features a clean, professional, and responsive design that allows pet owners to easily explore services, access educational resources, and schedule appointments online. The logo was created using Adobe Illustrator, the UI/UX was designed in Figma, and the website was developed in WordPress, resulting in a polished digital presence that reflects the hospital's commitment to compassionate, advanced, and high-quality veterinary care."
      }
    ]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design Portfolio",
    category: "UI/UX Design",
    description: "Wireframes, user flows, design systems, mobile apps, dashboards, and high-fidelity prototypes.",
    projects: [
      {
        title: "Robinsons Movie World",
        type: "Cinema & Entertainment Website",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-01__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-01__01.webp",
        "assets__images__uiux__project-01__02.webp",
        "assets__images__uiux__project-01__03.webp"
        ],
        description: "Robinsons Movieworld is a modern cinema and entertainment website designed to showcase the latest blockbuster films, cinema schedules, online ticket booking, and exclusive movie experiences across Robinsons Malls nationwide. As the UI/UX Designer for this 2021 project, I was responsible for designing an intuitive, visually engaging, and responsive user interface in Figma, focusing on improving the overall user experience, navigation, and accessibility. The final design delivers a seamless digital experience that makes it easy for users to discover movies, reserve seats, and explore cinema offerings."
      },
      {
        title: "Robinsons Movieworld Card",
        type: "Movie Membership Card Website",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-02__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-02__01.webp",
        "assets__images__uiux__project-02__02.webp",
        "assets__images__uiux__project-02__03.webp",
        "assets__images__uiux__project-02__04.webp",
        "assets__images__uiux__project-02__05.webp",
        "assets__images__uiux__project-02__06.webp"

        ],
        description: "The Robinsons Movieworld Card website was designed to introduce and promote the Movieworld Card, allowing moviegoers to conveniently register, manage their membership, and enjoy exclusive cinema perks and promotions. As the UI/UX Designer for this 2021 project, I designed a clean, intuitive, and responsive user interface in Figma, focusing on creating a seamless user journey for card registration, account management, and accessing membership benefits."
      },
      {
        title: "RLC Leasing System",
        type: "Enterprise Leasing Management System",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-03__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-03__01.webp",
        "assets__images__uiux__project-03__02.webp",
        "assets__images__uiux__project-03__03.webp",
        "assets__images__uiux__project-03__04.webp"
        ],
        description: "The RLC Leasing System is an internal enterprise platform designed to streamline the leasing process for Robinsons Land Corporation. The system enables leasing teams to manage tenant applications, property listings, lease agreements, document workflows, and approval processes through a centralized digital platform. As the UI/UX Designer for this project, I designed the user interface and user experience in Figma, focusing on creating an intuitive, efficient, and user-friendly workflow that improves productivity and simplifies complex leasing operations."
      },
      {
        title: "RLC Residences Leasing",
        type: "Real Estate Leasing Platform",
        url: "https://leasing.rlcresidences.com/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-04__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-04__01.webp",
        "assets__images__uiux__project-04__02.webp",
        "assets__images__uiux__project-04__03.webp",
        "assets__images__uiux__project-04__04.webp"
  
        ],
        description: "RLC Residences Leasing is a modern real estate leasing platform designed to help users discover, compare, and inquire about premium condominium units available for rent across RLC Residences developments. The platform provides an intuitive property search experience with detailed unit information, pricing, amenities, location highlights, and online inquiry features, making it easier for prospective tenants to find a home that fits their lifestyle. As the UI/UX Designer for this project, I designed the user interface and user experience in Figma, focusing on intuitive navigation, streamlined property browsing, and a seamless inquiry process that enhances the overall user journey."
      },
      {
        title: "WorkAble",
        type: "Workplace Management Application",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-05__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-05__01.webp",
        "assets__images__uiux__project-05__02.webp",
        "assets__images__uiux__project-05__03.webp",
        "assets__images__uiux__project-05__04.webp",
        "assets__images__uiux__project-05__05.webp"
        ],
        description: "WorkAble is a workplace management application designed to help employees quickly locate available workstations, meeting rooms, and collaborative spaces within the office. The app provides real-time availability, interactive floor maps, and an intuitive booking experience, making it easier for teams to find and reserve spaces while optimizing office utilization. As the UI/UX Designer for this project, I designed the user interface and user experience in Figma, focusing on intuitive navigation, efficient space discovery, and a seamless reservation workflow to enhance the hybrid workplace experience."
      },
      {
        title: "Mall Dash",
        type: "Online Shopping & Delivery Application",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__uiux__project-06__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__uiux__project-06__01.webp",
        "assets__images__uiux__project-06__02.webp",
        "assets__images__uiux__project-06__03.webp"
   
        ],
        description: "Mall Dash is an online shopping and delivery application developed during the COVID-19 pandemic to help customers conveniently purchase products from shopping malls and have them delivered directly to their doorstep. Similar to food and grocery delivery platforms, the app allows users to browse participating stores, place orders, track deliveries in real time, and enjoy a safe, contactless shopping experience. As the UI/UX Designer for this project, I designed the user interface and user experience in Figma, focusing on intuitive product discovery, streamlined checkout, and a seamless order tracking experience to make online shopping fast, simple, and accessible."
      },
      
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design Portfolio",
    category: "Graphic Design",
    description: "Brand graphics, advertisements, print collateral, event designs, and marketing campaigns.",
    projects: [
      {
        title: "Root Home",
        type: "Branding & Marketing Design",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__graphic-design__project-01__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__graphic-design__project-01__01.webp",
        "assets__images__graphic-design__project-01__02.webp",
        "assets__images__graphic-design__project-01__03.webp",
        "assets__images__graphic-design__project-01__04.webp",
        "assets__images__graphic-design__project-01__05.webp",
        "assets__images__graphic-design__project-01__06.webp",
        "assets__images__graphic-design__project-01__07.webp",
        "assets__images__graphic-design__project-01__08.webp",
        "assets__images__graphic-design__project-01__09.webp"
    
        ],
        description: "Root Home is a UK-based home improvement and property solutions company specializing in sustainable home upgrades and energy-efficient services. As the Branding & Marketing Designer for this project, I was responsible for creating a cohesive visual identity and a wide range of marketing materials that strengthened the company's brand presence across both digital and print platforms. Using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign, I designed promotional assets, social media graphics, brochures, flyers, banners, and other branded collateral that effectively communicated the company's services while maintaining a consistent and professional brand identity."
      },
      {
        title: "Together",
        type: "Branding & Visual Identity",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__graphic-design__project-02__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__graphic-design__project-02__01.webp",
        "assets__images__graphic-design__project-02__02.webp",
        "assets__images__graphic-design__project-02__03.webp",
        "assets__images__graphic-design__project-02__04.webp",
        "assets__images__graphic-design__project-02__05.webp",
        "assets__images__graphic-design__project-02__06.webp",
        "assets__images__graphic-design__project-02__07.webp",
        "assets__images__graphic-design__project-02__08.webp",
        "assets__images__graphic-design__project-02__09.webp"


        ],
        description: "Together is the Middle East's first dedicated Workplace Culture Consultancy, helping organizations build stronger workplace cultures through advisory and facilitation programs centered on Culture, Purpose, and People. As the Branding & Marketing Designer for this project, I contributed to developing a distinctive and professional visual identity that positioned the consultancy as a credible, category-defining brand. Using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign, I designed branding assets and marketing materials that established a cohesive brand presence across both digital and print platforms while effectively communicating the company's values and expertise."
      },
      {
        title: "Lex Solutions",
        type: "Legal Consultancy Website",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__graphic-design__project-03__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__graphic-design__project-03__01.webp",
        "assets__images__graphic-design__project-03__02.webp",
        "assets__images__graphic-design__project-03__03.webp",
        "assets__images__graphic-design__project-03__04.webp",
        "assets__images__graphic-design__project-03__05.webp",
        "assets__images__graphic-design__project-03__06.webp",
        "assets__images__graphic-design__project-03__07.webp"


        ],
        description: "LexSolutions is a modern legal consultancy specializing in legal operations, strategic advisory, and innovative solutions for in-house legal teams. As the Brand Identity Designer for this project, I created a distinctive visual identity that reflects the firm's professionalism, innovation, and client-focused approach. Using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign, I developed the brand identity system, including the logo, color palette, typography, brand guidelines, and supporting marketing materials to ensure a consistent and recognizable presence across both digital and print touchpoints."
      },
      {
        title: "Glasgow Research & Consulting",
        type: "Branding & Visual Identity",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__graphic-design__project-04__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__graphic-design__project-04__01.webp",
        "assets__images__graphic-design__project-04__02.webp",
        "assets__images__graphic-design__project-04__03.webp",
        "assets__images__graphic-design__project-04__04.webp",
        "assets__images__graphic-design__project-04__05.webp",
        "assets__images__graphic-design__project-04__06.webp",
        "assets__images__graphic-design__project-04__07.webp"


        ],
        description: "Glasgow Research & Consulting is a market research and business consulting firm serving clients across the Middle East and Africa. As the Brand Identity Designer, I developed the company's visual identity and branding assets using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign, creating a professional and consistent brand presence across digital and print materials."
      }
     
     
      
   
    ]
  },
  {
    id: "social-media",
    title: "Social Media Management Portfolio",
    category: "Social Media Management",
    description: "Branded social content, strategy, calendars, campaign assets, and audience-focused communication.",
    projects: [
      {
        title: "North Star Eye Care",
        type: "Monthly Content Set",
        url: "https://www.instagram.com/northstareye/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-01__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-01__01.webp",
        "assets__images__social-media__project-01__02.webp",
        "assets__images__social-media__project-01__03.webp",
        "assets__images__social-media__project-01__cover.webp"
        ],
        description: "North Star Eye Care's social media presence was designed to educate patients, promote eye care services, and strengthen the clinic's online brand. As the Social Media Manager & Graphic Designer, I created engaging social media graphics, marketing campaigns, and short-form video content, maintaining a consistent and professional brand identity across Instagram."
      },
      {
        title: "Vision I Care",
        type: "Monthly Content Set",
        url: "https://www.instagram.com/visionicare/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-02__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-02__01.webp",
        "assets__images__social-media__project-02__02.webp",
        "assets__images__social-media__project-02__03.webp",
        "assets__images__social-media__project-02__04.webp",
        "assets__images__social-media__project-02__cover.webp"
        ],
        description: "Vision i Care's social media presence was designed to educate patients about eye health, promote vision care services, and strengthen the clinic's online presence. As the Social Media Manager & Graphic Designer, I created engaging social media graphics, promotional campaigns, and short-form video content that maintained a professional and consistent brand identity while increasing audience engagement across digital platforms."
      },
      {
        title: "Resilient Healthcare Services",
        type: "Content Campaign",
        url: "https://www.instagram.com/resilient_healthcare_services/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-03__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-03__01.webp",
        "assets__images__social-media__project-03__02.webp",
        "assets__images__social-media__project-03__03.webp",
        "assets__images__social-media__project-03__04.webp",
        "assets__images__social-media__project-03__05.webp"
        ],
        description: "Resilient Healthcare Services' social media presence was created to promote healthcare services, share educational content, and build trust with patients and the community. As the Social Media Manager & Graphic Designer, I created engaging social media graphics, promotional campaigns, and short-form video content while maintaining a consistent and professional brand identity across Instagram."
      },
      {
        title: "Pastry by Venus",
        type: "Monthly Content Set",
        url: "https://www.facebook.com/profile.php?id=61586321642754",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-04__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-04__01.webp",
        "assets__images__social-media__project-04__02.webp",
        "assets__images__social-media__project-04__03.webp",
        "assets__images__social-media__project-04__cover.webp"
        ],
        description: "Pastry by Venus' social media presence was designed to showcase handcrafted desserts, promote seasonal offerings, and strengthen the bakery's online brand. As the Social Media Manager & Graphic Designer, I created engaging social media graphics, promotional campaigns, and short-form video content that highlighted the brand's premium products while maintaining a clean and consistent visual identity."
      },
      {
        title: "Auburn Dental",
        type: "Content Campaign",
        url: "https://www.instagram.com/auburndentalcenter/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-05__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-05__01.webp",
        "assets__images__social-media__project-05__02.webp",
        "assets__images__social-media__project-05__03.webp",
        "assets__images__social-media__project-05__04.webp",
        "assets__images__social-media__project-05__cover.webp"
        ],
        description: "Auburn Dental Center's social media presence was designed to educate patients, promote dental services, and strengthen the practice's online brand across multiple digital platforms. As the Social Media Manager & Graphic Designer, I created engaging graphics, marketing campaigns, and short-form video content while maintaining a consistent and professional brand identity across Facebook, Instagram, LinkedIn, TikTok, and X (formerly Twitter)."
      },
      {
        title: "Jersey Integrative Health & Wellness",
        type: "Monthly Content Set",
        url: "https://www.instagram.com/jerseyintegrative/",
        // Card cover image. Replace this file with your own cover image.
        image: "assets__images__social-media__project-06__cover.webp",
        // Modal gallery images. Add, remove, or rename image paths here.
        images: [
        "assets__images__social-media__project-06__01.webp",
        "assets__images__social-media__project-06__05.webp",
        "assets__images__social-media__project-06__cover.webp",
        "assets__images__social-media__project-06__03.webp",
        "assets__images__social-media__project-06__04.webp"
        ],
        description: "Jersey Integrative Health & Wellness' social media presence was designed to educate patients, promote comprehensive healthcare services, and strengthen the practice's digital brand. As the Social Media Manager & Graphic Designer, I created engaging graphics, educational campaigns, and short-form video content while maintaining a professional and consistent brand identity across Facebook, Instagram, LinkedIn, TikTok, and X (formerly Twitter)."
      }
    ]
  },
  {
    id: "social-media-revise-management",
    title: "Video Editing Project 01",
    category: "Short-Form Video Editing",
    description: "This portfolio showcases some of my video editing work, including short-form promotional videos, social media reels, product ads, and brand campaigns for various clients. Using CapCut and Adobe Premiere Pro, I handled editing, motion graphics, text animations, color correction, sound design, and platform optimization to create engaging content across Facebook, Instagram, TikTok, LinkedIn, and other digital platforms.",
    projects: [
      {
        title: "Video Editing Project 01",
        type: "Before & After Revision",
        url: "https://drive.google.com/file/d/1tX9mve5yhhSiiPxINewNug2L02yMUy_0/view?usp=sharing",
        image: "assets__images__social-media-revisions__project-01__cover.webp",
        images: [
          "assets__images__social-media-revisions__project-01__cover.webp"
        ],
        description: "A short house tour reel designed to present the property's best features in an engaging and visually appealing format for social media."
      },
    
    
      {
        title: "Video Editing Project 02",
        type: "Before & After Revision",
        url: "https://drive.google.com/file/d/1tX9mve5yhhSiiPxINewNug2L02yMUy_0/view?usp=sharing",
        image: "assets__images__social-media-revisions__project-02__cover.webp",
        images: [
          "assets__images__social-media-revisions__project-02__cover.webp"
        ],
        description: "A short clinic tour reel designed to showcase the dental practice's modern facilities, welcoming environment, and patient-focused care in an engaging and visually appealing format for social media."
      }
    ]
  }
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initializePortfolio() {
  const target = qs("#portfolio-sections");
  if (!target) return;

  target.innerHTML = portfolioData.map((section) => `
    <section class="portfolio-section" id="${section.id}" data-portfolio-section>
      <div class="portfolio-heading reveal">
        <div><p class="eyebrow">${section.category}</p><h2>${section.title}</h2></div>
        <p>${section.description}</p>
      </div>
      <div class="project-grid">
        ${section.projects.map((project, index) => `
          <article class="card project-card reveal" ${index > 2 ? "hidden" : ""} data-project-index="${index}">
            <div class="project-media">
              ${project.video ? `
                <!-- Replace this dummy video with your actual MP4 video -->
                <video preload="metadata" poster="${project.poster}" aria-label="${project.title} placeholder video">
                  <source src="${project.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <span class="play-overlay" aria-hidden="true">▶</span>
                <span class="video-fallback">Replace the missing MP4 file in assets/videos. Poster remains visible.</span>
              ` : `
                <!-- Replace this dummy image with your actual project image -->
                <img src="${project.image}" alt="${project.title} ${section.category} portfolio project by Audwin Mocorro" loading="lazy">
              `}
            </div>
            <div class="project-copy"><div><h3>${project.title}</h3><p>${project.type}</p></div><button class="project-open" type="button" aria-label="Open ${project.title}" data-open-project="${section.id}:${index}">↗</button></div>
          </article>
        `).join("")}
      </div>
      <div class="view-more-wrap"><button class="btn btn-secondary" type="button" data-view-more aria-expanded="false">View More Projects</button></div>
    </section>
  `).join("");

  initializeRevealAnimations();
}

function initializeMobileNavigation() {
  const toggle = qs(".nav-toggle");
  const nav = qs(".site-nav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("a", nav).forEach((link) => link.addEventListener("click", closeNav));
  window.addEventListener("resize", () => { if (window.innerWidth > 1050) closeNav(); });
}

function initializeActiveNavigation() {
  const page = document.body.dataset.page;
  const activeLink = qs(`[data-nav="${page}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "page");
  }
}

function initializeTheme() {
  const toggle = qs(".theme-toggle");
  const icon = qs(".theme-icon");
  const saved = localStorage.getItem("portfolio-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (preferredDark ? "dark" : "light");

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
    if (toggle) toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  };

  applyTheme(initial);
  if (toggle) toggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  });
}

function initializeScrollFeatures() {
  const progress = qs(".scroll-progress span");
  const scrollTopButton = qs(".scroll-top");

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = `${percentage}%`;
    if (scrollTopButton) scrollTopButton.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
  if (scrollTopButton) scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initializeViewMore() {
  qsa("[data-portfolio-section]").forEach((section) => {
    const button = qs("[data-view-more]", section);
    const projects = qsa(".project-card", section);
    if (!button) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      projects.forEach((project, index) => { if (index > 2) project.hidden = expanded; });
      button.setAttribute("aria-expanded", String(!expanded));
      button.textContent = expanded ? "View More Projects" : "Show Less";
      if (expanded) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initializeProjectModals() {
  const modal = qs("#project-modal");
  if (!modal) return;

  const media = qs("#modal-media", modal);
  const title = qs("#modal-title", modal);
  const category = qs("#modal-category", modal);
  const description = qs("#modal-description", modal);
  const counter = qs("#modal-counter", modal);
  const thumbnails = qs("#modal-thumbnails", modal);
  const previousButton = qs("[data-gallery-prev]", modal);
  const nextButton = qs("[data-gallery-next]", modal);
  const zoomButton = qs("[data-gallery-zoom]", modal);
  const zoomOverlay = qs("#image-zoom", modal);
  const zoomImage = qs("#zoom-image", modal);

  let activeProject = null;
  let galleryItems = [];
  let activeIndex = 0;
  let touchStartX = 0;
  let lastFocusedElement = null;

  const getGalleryItems = (project) => {
    if (Array.isArray(project.images) && project.images.length) {
      return project.images.map((src) => ({ type: "image", src }));
    }
    if (project.video) return [{ type: "video", src: project.video, poster: project.poster }];
    return project.image ? [{ type: "image", src: project.image }] : [];
  };

  const renderGallery = () => {
    const item = galleryItems[activeIndex];
    if (!item || !activeProject) return;

    media.classList.add("is-changing");
    window.setTimeout(() => {
      media.innerHTML = item.type === "video"
        ? `<video class="modal-media-video" controls preload="metadata" poster="${item.poster || ""}"><source src="${item.src}" type="video/mp4">Your browser does not support the video tag.</video>`
        : `<img class="modal-media-image" src="${item.src}" alt="${activeProject.title} portfolio detail ${activeIndex + 1}" data-gallery-zoom>`;
      media.classList.remove("is-changing");
    }, 120);

    counter.textContent = `${activeIndex + 1} / ${galleryItems.length}`;
    const multipleItems = galleryItems.length > 1;
    previousButton.hidden = !multipleItems;
    nextButton.hidden = !multipleItems;
    thumbnails.hidden = !multipleItems;
    zoomButton.hidden = item.type !== "image";

    thumbnails.innerHTML = galleryItems.map((galleryItem, index) => `
      <button class="modal-thumbnail ${index === activeIndex ? "active" : ""}" type="button" data-gallery-index="${index}" aria-label="View image ${index + 1}" aria-current="${index === activeIndex ? "true" : "false"}">
        ${galleryItem.type === "video" ? `<span class="thumbnail-video">▶</span>` : `<img src="${galleryItem.src}" alt="" loading="lazy">`}
      </button>
    `).join("");
  };

  const moveGallery = (direction) => {
    if (galleryItems.length < 2) return;
    activeIndex = (activeIndex + direction + galleryItems.length) % galleryItems.length;
    renderGallery();
  };

  const closeZoom = () => {
    zoomOverlay.classList.remove("open");
    zoomOverlay.setAttribute("aria-hidden", "true");
  };

  const openZoom = () => {
    const item = galleryItems[activeIndex];
    if (!item || item.type !== "image") return;
    zoomImage.src = item.src;
    zoomImage.alt = `${activeProject.title} enlarged image ${activeIndex + 1}`;
    zoomOverlay.classList.add("open");
    zoomOverlay.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    closeZoom();
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    media.innerHTML = "";
    thumbnails.innerHTML = "";
    lastFocusedElement?.focus();
  };

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-project]");
    if (openButton) {
      const [sectionId, projectIndex] = openButton.dataset.openProject.split(":");
      const section = portfolioData.find((item) => item.id === sectionId);
      const project = section?.projects[Number(projectIndex)];
      if (!section || !project) return;

      lastFocusedElement = openButton;
      activeProject = project;
      galleryItems = getGalleryItems(project);
      activeIndex = 0;
      title.textContent = project.title;
      category.textContent = `${section.category} · ${project.type}`;
      description.innerHTML = `${project.description}${project.url ? `<br><br><a href="${project.url}" target="_blank" rel="noopener noreferrer" class="visit-website-btn">Visit Live ↗</a>` : ""}`;
      renderGallery();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      qs(".modal-close", modal)?.focus();
      return;
    }

    if (event.target.closest("[data-modal-close]")) closeModal();
    if (event.target.closest("[data-gallery-prev]")) moveGallery(-1);
    if (event.target.closest("[data-gallery-next]")) moveGallery(1);
    if (event.target.closest("[data-gallery-zoom]")) openZoom();
    if (event.target.closest("[data-zoom-close]")) closeZoom();

    const thumbnail = event.target.closest("[data-gallery-index]");
    if (thumbnail) {
      activeIndex = Number(thumbnail.dataset.galleryIndex);
      renderGallery();
    }
  });

  media.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  media.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 50) moveGallery(distance > 0 ? -1 : 1);
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("open")) return;
    if (event.key === "Escape") {
      if (zoomOverlay.classList.contains("open")) closeZoom();
      else closeModal();
    }
    if (!zoomOverlay.classList.contains("open") && event.key === "ArrowLeft") moveGallery(-1);
    if (!zoomOverlay.classList.contains("open") && event.key === "ArrowRight") moveGallery(1);
  });
}

function initializeTestimonialFilters() {
  const buttons = qsa("[data-testimonial-filter]");
  const cards = qsa("[data-testimonial-category]");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.testimonialFilter;
    cards.forEach((card) => { card.hidden = filter !== "all" && card.dataset.testimonialCategory !== filter; });
  }));
}

function initializeContactForm() {
  const form = qs("#contact-form");
  if (!form) return;

  const status = qs("#form-status");
  const submitButton = qs("button[type='submit']", form);
  const fields = {
    "full-name": { message: "Please enter your full name." },
    email: { message: "Please enter a valid email address." },
    service: { message: "Please select a service." },
    budget: { message: "Please select a project budget." },
    description: { message: "Please describe your project using at least 20 characters." }
  };

  const setError = (field, message = "") => {
    const error = qs(`#${field.id}-error`);
    field.classList.toggle("invalid", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
    if (error) error.textContent = message;
  };

  const validateField = (field) => {
    if (!field) return true;
    let valid = field.checkValidity();
    if (field.id === "description" && field.value.trim().length < 20) valid = false;
    setError(field, valid ? "" : fields[field.id]?.message || "Please check this field.");
    return valid;
  };

  Object.keys(fields).forEach((id) => {
    const field = qs(`#${id}`, form);
    if (!field) return;
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => { if (field.classList.contains("invalid")) validateField(field); });
    field.addEventListener("change", () => { if (field.classList.contains("invalid")) validateField(field); });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = Object.keys(fields).map((id) => validateField(qs(`#${id}`, form))).every(Boolean);

    if (!valid) {
      status.className = "form-status error";
      status.textContent = "Please correct the highlighted fields before submitting.";
      qs(".invalid", form)?.focus();
      return;
    }

    status.className = "form-status";
    status.textContent = "";
    submitButton.disabled = true;
    submitButton.classList.add("is-loading");

    window.setTimeout(() => {
      submitButton.disabled = false;
      submitButton.classList.remove("is-loading");
      status.className = "form-status success";
      status.textContent = "Thank you! Your message has been received. This demo form is ready to connect to your preferred email or backend service.";
      form.reset();
      qsa(".invalid", form).forEach((field) => setError(field));
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 800);
  });
}

function initializeRevealAnimations() {
  const elements = qsa(".reveal:not([data-reveal-ready])");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => { element.dataset.revealReady = "true"; element.classList.add("visible"); });
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px" });

  elements.forEach((element) => { element.dataset.revealReady = "true"; observer.observe(element); });
}

function initializeYear() {
  qsa("[data-current-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
}

document.addEventListener("DOMContentLoaded", () => {
  initializePortfolio();
  initializeMobileNavigation();
  initializeActiveNavigation();
  initializeTheme();
  initializeScrollFeatures();
  initializeViewMore();
  initializeProjectModals();
  initializeTestimonialFilters();
  initializeContactForm();
  initializeRevealAnimations();
  initializeYear();
});
