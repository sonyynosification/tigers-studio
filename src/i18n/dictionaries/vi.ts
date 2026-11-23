import type { Dictionary } from "./en";

// Tiếng Việt. Voice: studio = "chúng mình", visitor = "bạn" — friendly, not stiff.
// Common tech loanwords (website, app, landing page, demo, prototype, wireframe, MVP)
// stay as Vietnamese teams actually say them.

export const vi: Dictionary = {
  meta: {
    title: "tigers.build · Thiết kế & phát triển Website, App",
    description:
      "Studio thiết kế và phát triển website, ứng dụng iOS & Android và MVP bằng Next.js, React Native. Nhóm nhỏ, làm chỉn chu, ra mắt nhanh.",
    notFoundTitle: "Không tìm thấy trang",
  },
  nav: {
    label: "Điều hướng chính",
    language: "Ngôn ngữ",
    work: "Dự án",
    services: "Dịch vụ",
    process: "Quy trình",
    studio: "Studio",
    sayHi: "Say Hi",
  },
  hero: {
    sticker: "Studio thiết kế & lập trình ✦",
    title: {
      before: "Làm website & app ",
      tape: "sang xịn",
      after: "",
    },
    lead: "Studio nhỏ chuyên thiết kế và phát triển. Website, app di động, và thỉnh thoảng là vài ý tưởng hoang dã.",
    ctaPrimary: "Bắt đầu dự án →",
    ctaSecondary: "Xem một vòng",
    stickerWebsites: "Website!",
    stickerApps: "Cả app nữa ✦",
    kitLabel: "Chú hổ Kit. Nhấn để Kit gầm lên.",
  },
  marquee: [
    "Website",
    "iOS & Android",
    "Web app",
    "Phần mềm doanh nghiệp",
    "Thương mại điện tử",
  ],
  services: {
    eyebrow: "Team này làm gì",
    title: "Bao gồm dưới đây, nhưng không phải tất cả.",
    items: [
      {
        title: "Website",
        blurb: "Website giới thiệu và landing page tải nhanh, dễ chỉnh sửa.",
        points: [
          "Next.js & headless CMS",
          "Chuẩn SEO và tối ưu tốc độ từ đầu",
          "Đội của bạn tự sửa nội dung được",
        ],
      },
      {
        title: "Ứng dụng",
        blurb:
          "App iOS, Android và web, từ bản phác thảo đầu tiên đến lúc lên App Store và Google Play.",
        points: [
          "Flutter & web",
          "Thiết kế → xây dựng → ra mắt",
          "Có số liệu phân tích từ ngày đầu",
        ],
      },
      {
        title: "Sản phẩm",
        blurb: "MVP hay sản phẩm, giao hàng nhanh, chỉnh sửa nhanh",
        points: [
          "Chốt phạm vi gọn nhất có thể",
          "Chất lượng lâu dài",
          "Bàn giao, hoặc đồng hành tiếp",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Xem cách làm việc",
    title: "Từ “hmmm…” đến “lên sóng!”",
    steps: [
      {
        title: "Đánh hơi",
        body: "Gọi điện, trao đổi, làm rõ ý tưởng và nhu cầu thực tế.",
      },
      {
        title: "Phác thảo",
        body: "Wireframe và prototype để so khớp với nhu cầu.",
      },
      {
        title: "Xây dựng",
        body: "Môi trường phát triển có thể thử nghiệm trực tiếp, không phải chờ đợi mỗi tuần.",
      },
      {
        title: "Ra mắt & gầm",
        body: "Lên sóng, theo dõi và trau chuốt. Rồi ăn mừng (dzooo).",
      },
    ],
  },
  work: {
    eyebrow: "Dự án tiêu biểu",
    title: "Vừa mới ra lò.",
    newTab: "(mở trong tab mới)",
    teaserTape: "Tuyệt mật",
    items: {
      tigersStore: {
        name: "Tigers Store",
        kind: "Xây dựng website",
        blurb:
          "Muốn xây dựng trang web cho cửa hàng của bạn? Chọn một mẫu, chỉnh sửa nội dung rồi bấm nút. Có ngay website trong 30s.",
      },
      projectTwo: {
        name: "App của bạn?",
        kind: "Còn trống",
        blurb:
          "Chỗ này vẫn đang chờ. Bạn mang ý tưởng, chúng mình lo phần còn lại.",
      },
      projectThree: {
        name: "Một ý tưởng lạ",
        kind: "Sắp ra mắt",
        blurb: "Đang cook, gần xong rồi. Chờ nha!",
      },
    },
  },
  studio: {
    eyebrow: "Chém gió một chút",
    title: "Nhỏ mà có võ.",
    body: "Team mình là một nhóm nhỏ gồm nhà thiết kế và lập trình viên, code trâu và thích uống bia. Các thành viên đều có nhiều kinh nghiệm làm việc dự án nhỏ và lớn.",
    kit: "Còn đây là anh Ba, linh vật của team. Ngon hơn khi uống lạnh 🍺.",
    kitTitle: "Anh Ba, linh vật của nhóm.",
    values: [
      "Đội nhỏ",
      "Toàn dân lành nghề",
      "Tiến độ minh bạch",
      "Demo hằng tuần",
      "Không lòng vòng",
    ],
  },
  contact: {
    title: { before: "Có ý tưởng?", tape: "Vào việc", after: " luôn!" },
    body: "Chia sẻ ý tưởng của bạn, chúng tôi sẽ phản hồi trong vòng 1 ngày, đồng thời bổ sung nhiều câu hỏi và lên ý tưởng.",
    methods: {
      email: "Email",
      phone: "Điện thoại / Zalo",
      telegram: "Telegram",
    },
    form: {
      title: "Ngại nói? Vậy gửi note nha.",
      body: "Không cần gọi điện hay xã giao. Mô tả sơ về vấn đề, bên mình sẽ liên hệ lại.",
      name: "Tên bạn",
      optional: "(không bắt buộc)",
      contact: "Email hoặc số điện thoại",
      contactPlaceholder: "Để chúng mình phản hồi",
      message: "Bạn đang nghĩ gì?",
      messagePlaceholder: "Một app, một website, một ý tưởng điên rồ…",
      submit: "Gửi đi",
      sending: "Đang gửi…",
      sent: "Nhận rồi! Chúng mình sẽ phản hồi trong vòng 1 ngày làm việc.",
      invalid: "Bạn điền giúp cách liên hệ và một lời nhắn ngắn nhé.",
      error: "Có lỗi xảy ra. Bạn gửi email giúp chúng mình nhé.",
    },
  },
  footer: {
    email: "Email",
    taxId: "MST",
    madeWith: "Làm bằng cái tâm (và vài cái sọc) tại một studio nhỏ.",
  },
  themeToggle: {
    toFocus: "Chế độ tập trung",
    toPlayful: "Chế độ vui nhộn",
    toFocusHint: "Chuyển sang giao diện tối giản, dễ nhìn hơn",
    toPlayfulHint: "Quay lại giao diện vui nhộn",
    kitTip: { lead: "Thấy hơi rối mắt?", action: "Đổi qua bản ngắn gọn →" },
    playfulTip: {
      lead: "Muốn sinh động hơn? Bản gốc có Kit, màu sắc và chút hài hước.",
      action: "Chuyển sang chế độ vui nhộn",
    },
  },
  // Chế độ tập trung: giọng trang trọng, "chúng tôi" và "bạn", không đùa.
  focus: {
    meta: {
      title: "tigers.build · Thiết kế & phát triển Website, App",
      description:
        "Chúng tôi thiết kế và phát triển website, ứng dụng di động và sản phẩm số cho doanh nghiệp.",
    },
    nav: { contact: "Liên hệ" },
    hero: {
      eyebrow: "Studio thiết kế & phát triển phần mềm",
      title: {
        before: "Website và ứng dụng ",
        em: "bền vững",
        after: " cho doanh nghiệp.",
      },
      body: "Chúng tôi thiết kế, phát triển và vận hành website, ứng dụng di động và sản phẩm số. Một đội ngũ giàu kinh nghiệm đồng hành cùng bạn từ buổi trao đổi đầu tiên đến khi ra mắt và sau đó.",
      ctaPrimary: "Trao đổi về dự án",
      ctaSecondary: "Xem dự án",
    },
    reply: {
      label: "Thời gian phản hồi",
      value: "1 ngày làm việc",
      body: "Mọi yêu cầu đều được chính những người thực hiện dự án trả lời.",
    },
    services: {
      eyebrow: "Dịch vụ",
      title: "Chúng tôi cung cấp",
      items: [
        {
          title: "Website",
          body: "Website doanh nghiệp và landing page tải nhanh, chuẩn SEO, dễ dàng cập nhật nội dung.",
        },
        {
          title: "Ứng dụng",
          body: "Ứng dụng iOS, Android và web, từ đặc tả yêu cầu đến khi phát hành trên App Store và Google Play.",
        },
      ],
      products: {
        title: "Sản phẩm & MVP",
        body: "Công cụ nội bộ và phiên bản đầu tiên của sản phẩm mới, phạm vi rõ ràng, bàn giao trong vài tuần.",
      },
      stackLabel: "Công nghệ",
    },
    process: {
      eyebrow: "Quy trình",
      title: "Quy trình rõ ràng, minh bạch",
      steps: [
        {
          title: "Khảo sát",
          body: "Tìm hiểu mục tiêu, người dùng và các ràng buộc, sau đó thống nhất phạm vi, tiến độ và ngân sách bằng văn bản.",
        },
        {
          title: "Thiết kế",
          body: "Wireframe và prototype tương tác, được bạn duyệt trước khi bắt đầu phát triển.",
        },
        {
          title: "Phát triển",
          body: "Bàn giao theo từng giai đoạn trên môi trường staging mà bạn có thể kiểm tra bất cứ lúc nào.",
        },
        {
          title: "Ra mắt & hỗ trợ",
          body: "Triển khai, giám sát và bảo trì định kỳ theo thỏa thuận hỗ trợ.",
        },
      ],
    },
    work: {
      eyebrow: "Dự án tiêu biểu",
      title: "Dự án gần đây",
      visit: "Truy cập",
      inquire: "Liên hệ",
      items: {
        tigersStore: {
          name: "Tigers Store",
          kind: "Nền tảng tạo website",
          blurb:
            "Nền tảng dựa trên mẫu có sẵn, giúp cửa hàng ra mắt website bán hàng mang thương hiệu riêng chỉ trong vài phút.",
        },
        projectThree: {
          name: "Sản phẩm sắp ra mắt",
          kind: "Đang phát triển",
          blurb:
            "Một sản phẩm mới đang được phát triển. Thông tin chi tiết sẽ được công bố khi ra mắt.",
        },
        projectTwo: {
          name: "Dự án của bạn",
          kind: "Tiếp nhận dự án",
          blurb: "Chúng tôi đang tiếp nhận dự án mới cho quý tới.",
        },
      },
    },
    about: {
      eyebrow: "Về chúng tôi",
      title: "Đội ngũ giàu kinh nghiệm, làm việc trực tiếp với bạn",
      body: "tigers.build là studio độc lập gồm các nhà thiết kế và kỹ sư phần mềm. Bạn làm việc trực tiếp với những người xây dựng sản phẩm, không qua trung gian.",
      facts: [
        { value: "Trực tiếp", label: "Làm việc với nhà thiết kế và kỹ sư" },
        { value: "Hằng tuần", label: "Báo cáo tiến độ" },
        { value: "Cố định", label: "Phạm vi và tiến độ thống nhất từ đầu" },
        { value: "Toàn quyền", label: "Sở hữu mã nguồn và thiết kế" },
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Trao đổi về dự án của bạn",
      body: "Mô tả ngắn gọn nhu cầu của bạn. Chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.",
      formTitle: "Gửi yêu cầu",
      form: {
        name: "Họ và tên",
        optional: "(không bắt buộc)",
        contact: "Email hoặc số điện thoại",
        contactPlaceholder: "ten@congty.com",
        message: "Thông tin dự án",
        messagePlaceholder:
          "Mô tả ngắn gọn mục tiêu, thời gian và ngân sách dự kiến.",
        submit: "Gửi yêu cầu",
        sending: "Đang gửi…",
        sent: "Cảm ơn bạn. Chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.",
        invalid: "Vui lòng cung cấp thông tin liên hệ và nội dung ngắn gọn.",
        error: "Không thể gửi tin nhắn. Vui lòng liên hệ qua email.",
      },
    },
    footer: { rights: "Bảo lưu mọi quyền." },
  },
  notFound: {
    body: "Kit ngủ gật, thế là trang này đi lạc mất rồi. Để mình đưa bạn về nhà nhé.",
    back: "← Về tigers.build",
  },
};
