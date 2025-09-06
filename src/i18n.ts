import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      companyName: 'Supreme Handloom',
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        contact: 'Contact',
        customerPortal: 'Customer Portal',
        language: 'Language',
        cart: 'Cart',
        login: 'Login',
        register: 'Register',
        logout: 'Logout'
      },
      hero: {
        title: 'Supreme Handloom',
        subtitle: 'Traditional Excellence Since 1967',
        description: 'Discover our exquisite collection of handwoven textiles crafted with generations of expertise and passion for traditional Indian craftsmanship.',
        cta: 'Explore Collection',
        legacy: 'Years of Legacy'
      },
      about: {
        title: 'Our Heritage',
        description: 'Established in 1967 by our founding family, Supreme Handloom has been preserving the art of traditional textile weaving for over five decades. We combine time-honored techniques with contemporary designs to create exceptional fabrics.',
        vision: 'Our Vision',
        visionText: 'To be the leading name in handloom textiles while preserving traditional craftsmanship.',
        mission: 'Our Mission',
        missionText: 'To provide premium quality handwoven products that celebrate Indian heritage.'
      },
      products: {
        title: 'Our Products',
        sarees: 'Handloom Sarees',
        fabrics: 'Premium Fabrics',
        scarves: 'Silk Scarves',
        clothing: 'Traditional Clothing',
        filter: 'Filter',
        sortBy: 'Sort By',
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        addToCart: 'Add to Cart',
        details: 'Details'
      },
      productDetail: {
        category: 'Category',
        availability: 'Availability',
        inStock: 'In Stock',
        outOfStock: 'Out of Stock',
        description: 'Description',
        relatedProducts: 'Related Products'
      },
      cart: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty.',
        browse: 'Browse Products',
        item: 'Item',
        price: 'Price',
        quantity: 'Quantity',
        total: 'Total',
        subtotal: 'Subtotal',
        checkout: 'Proceed to Checkout'
      },
      contact: {
        title: 'Contact Us',
        phone: 'Phone',
        email: 'Email',
        gst: 'GST Number',
        address: 'Address',
        getInTouch: 'Get in Touch',
        name: 'Name',
        message: 'Message',
        send: 'Send Message'
      },
      auth: {
        loginTitle: 'Login to your Account',
        registerTitle: 'Create an Account',
        email: 'Email Address',
        password: 'Password',
        fullName: 'Full Name',
        loginButton: 'Login',
        registerButton: 'Register',
        noAccount: "Don't have an account?",
        haveAccount: 'Already have an account?',
        signUp: 'Sign Up',
        signIn: 'Sign In'
      },
      customer: {
        title: 'Customer Portal',
        login: 'Login',
        username: 'Username',
        password: 'Password',
        loginButton: 'Sign In',
        creditorDetails: 'Creditor Details',
        welcome: 'Welcome to Customer Portal'
      },
      admin: {
        title: 'Admin Portal',
        dashboard: 'Dashboard',
        users: 'Users',
        orders: 'Orders',
        settings: 'Settings',
        loginTitle: 'Admin Secure Login',
        loginButton: 'Secure Login',
        productManagement: 'Product Management',
        addProduct: 'Add Product',
        editProduct: 'Edit Product',
        productName: 'Product Name',
        productDescription: 'Description',
        productPrice: 'Price',
        productCategory: 'Category',
        productImageURL: 'Image URL',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        confirmDelete: 'Are you sure you want to delete this product?'
      }
    }
  },
  hi: {
    translation: {
      companyName: 'सुप्रीम हैंडलूम',
      nav: {
        home: 'मुख्य',
        about: 'हमारे बारे में',
        products: 'उत्पाद',
        contact: 'संपर्क',
        customerPortal: 'ग्राहक पोर्टल',
        language: 'भाषा',
        cart: 'कार्ट',
        login: 'लॉगिन',
        register: 'रजिस्टर',
        logout: 'लॉगआउट'
      },
      hero: {
        title: 'सुप्रीम हैंडलूम',
        subtitle: '1967 से पारंपरिक उत्कृष्टता',
        description: 'हमारे हस्तनिर्मित वस्त्रों के उत्कृष्ट संग्रह की खोज करें जो पीढ़ियों की विशेषज्ञता और पारंपरिक भारतीय शिल्पकारी के जुनून से तैयार किए गए हैं।',
        cta: 'संग्रह देखें',
        legacy: 'साल की विरासत'
      },
      products: {
        title: 'हमारे उत्पाद',
        addToCart: 'कार्ट में डालें',
        details: 'विवरण'
      },
      cart: {
        title: 'शॉपिंग कार्ट',
        empty: 'आपकी कार्ट खाली है।',
        browse: 'उत्पाद ब्राउज़ करें',
        checkout: 'चेकआउट के लिए आगे बढ़ें'
      },
      auth: {
        loginTitle: 'अपने खाते में પ્રવેશ करें',
        registerTitle: 'खाता बनाएं',
        email: 'ईमेल पता',
        password: 'पासवर्ड',
        fullName: 'पूरा नाम',
        loginButton: 'लॉगिन करें',
        registerButton: 'रजिस्टर करें',
        noAccount: 'क्या आपका खाता नहीं है?',
        haveAccount: 'क्या आपका पहले से ही खाता है?',
        signUp: 'साइन अप करें',
        signIn: 'साइन इन करें'
      },
      admin: {
        title: 'एडमिन पोर्टल',
        productManagement: 'उत्पाद प्रबंधन',
        addProduct: 'उत्पाद जोड़ें'
      }
    }
  },
  ur: {
    translation: {
      companyName: 'سپریم ہینڈلوم',
      nav: {
        home: 'ہوم',
        about: 'ہمارے بارے میں',
        products: 'پروڈکٹس',
        contact: 'رابطہ',
        customerPortal: 'کسٹمر پورٹل',
        language: 'زبان',
        cart: 'کارٹ',
        login: 'لاگ ان',
        register: 'رجسٹر',
        logout: 'لاگ آؤٹ'
      },
      hero: {
        title: 'سپریم ہینڈلوم',
        subtitle: '1967 سے روایتی بہترین',
        description: 'ہمارے ہاتھ سے بنے ٹیکسٹائل کے شاندار مجموعے کو دریافت کریں جو نسلوں کی مہارت اور روایتی ہندوستانی دستکاری کے جذبے سے تیار کیے گئے ہیں۔',
        cta: 'کلیکشن دیکھیں',
        legacy: 'سال کی وراثت'
      },
      products: {
        title: 'ہمارے پروڈکٹس',
        addToCart: 'کارٹ میں شامل کریں',
        details: 'تفصیلات'
      },
      cart: {
        title: 'شاپنگ کارٹ',
        empty: 'آپ کا کارٹ خالی ہے۔',
        browse: 'پروڈکٹس براؤز کریں',
        checkout: 'چیک آؤٹ پر آگے بڑھیں'
      },
      auth: {
        loginTitle: 'اپنے اکاؤنٹ میں لاگ ان کریں',
        registerTitle: 'ایک اکاؤنٹ بنائیں',
        email: 'ای میل اڈریس',
        password: 'پاس ورڈ',
        fullName: 'پورا نام',
        loginButton: 'لاگ ان کریں',
        registerButton: 'رجسٹر کریں',
        noAccount: 'اکاؤنٹ نہیں ہے؟',
        haveAccount: 'پہلے سے ہی اکاؤنٹ ہے؟',
        signUp: 'سائن اپ',
        signIn: 'سائن ان'
      },
      admin: {
        title: 'ایڈمن پورٹل',
        productManagement: 'پروڈکٹ مینجمنٹ',
        addProduct: 'پروڈکٹ شامل کریں'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    // Add missing keys from 'en' to other languages
    partialBundledLanguages: true,
  });

export default i18n;
