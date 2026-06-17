const SITE_LANG_KEY = "bpr-site-lang";
const SUPPORTED_LANGS = new Set(["es", "en"]);

const translations = {
    home: {
        text: {
            "meta-title": {
                es: "Comentarios de YouTube de BeHealth PR",
                en: "BeHealth PR YouTube Comments"
            },
            "meta-description": {
                es: "Homepage pública de la app Comentarios de YouTube de BeHealth PR para la verificación de Google OAuth.",
                en: "Public homepage for the BeHealth PR YouTube Comments app used in Google OAuth verification."
            },
            "brand-eyebrow": {
                es: "BeHealth PR",
                en: "BeHealth PR"
            },
            "brand-name": {
                es: "Comentarios de YouTube",
                en: "YouTube Comments"
            },
            "nav-home": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "nav-privacy": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "nav-terms": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            },
            "lang-switch-label": {
                es: "Idioma",
                en: "Language"
            },
            "hero-eyebrow": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "hero-title": {
                es: "Comentarios de YouTube de BeHealth PR",
                en: "BeHealth PR YouTube Comments"
            },
            "hero-lead": {
                es: "Comentarios de YouTube de BeHealth PR es una funcionalidad implementada mediante un plugin de WordPress en este sitio. Permite que los visitantes inicien sesión con su cuenta de Google para publicar comentarios en videos de YouTube embebidos dentro de BeHealth PR.",
                en: "BeHealth PR YouTube Comments is a feature implemented through a WordPress plugin on this site. It allows visitors to sign in with their Google account to post comments on YouTube videos embedded within BeHealth PR."
            },
            "stat-1-label": {
                es: "Autenticación",
                en: "Authentication"
            },
            "stat-1-title": {
                es: "Google OAuth",
                en: "Google OAuth"
            },
            "stat-1-body": {
                es: "La app usa Google OAuth únicamente para autenticar al usuario y solicitar el permiso necesario para comentar en YouTube.",
                en: "The app uses Google OAuth only to authenticate the user and request the permission required to comment on YouTube."
            },
            "stat-2-label": {
                es: "Uso del acceso",
                en: "Access usage"
            },
            "stat-2-title": {
                es: "Comentarios en YouTube",
                en: "YouTube comments"
            },
            "stat-2-body": {
                es: "El acceso solicitado se utiliza exclusivamente para permitir la publicación de comentarios en YouTube desde este sitio.",
                en: "The requested access is used exclusively to allow posting comments on YouTube from this site."
            },
            "stat-3-label": {
                es: "Datos sensibles",
                en: "Sensitive data"
            },
            "stat-3-title": {
                es: "No guarda tu contraseña",
                en: "It does not store your password"
            },
            "stat-3-body": {
                es: "Este sitio no almacena la contraseña de Google del usuario. La autenticación ocurre en los servicios de Google.",
                en: "This site does not store the user's Google password. Authentication takes place on Google's services."
            },
            "purpose-eyebrow": {
                es: "Propósito de la app",
                en: "App purpose"
            },
            "purpose-title": {
                es: "Qué hace y qué no hace esta integración",
                en: "What this integration does and does not do"
            },
            "purpose-lead": {
                es: "Esta página está pensada para que usuarios y revisores entiendan con claridad por qué la app solicita acceso con Google y cómo se usa ese acceso dentro del sitio.",
                en: "This page is designed so users and reviewers can clearly understand why the app requests Google access and how that access is used within the site."
            },
            "card-1-title": {
                es: "Muestra videos embebidos",
                en: "Displays embedded videos"
            },
            "card-1-body": {
                es: "El plugin incrusta videos de YouTube dentro de páginas de WordPress para acompañar contenidos editoriales o institucionales.",
                en: "The plugin embeds YouTube videos inside WordPress pages to support editorial or institutional content."
            },
            "card-2-title": {
                es: "Permite comentar",
                en: "Allows commenting"
            },
            "card-2-body": {
                es: "Si el usuario lo desea, puede iniciar sesión con Google y autorizar el acceso necesario para publicar comentarios en YouTube.",
                en: "If the user chooses, they can sign in with Google and authorize the access needed to post comments on YouTube."
            },
            "card-3-title": {
                es: "No gestiona otras acciones",
                en: "Does not manage other actions"
            },
            "card-3-body": {
                es: "La app no se usa para administrar canales, subir videos ni manipular contenido fuera de la función puntual de comentarios.",
                en: "The app is not used to manage channels, upload videos, or manipulate content beyond the specific commenting function."
            },
            "flow-eyebrow": {
                es: "Flujo de uso",
                en: "Usage flow"
            },
            "flow-title": {
                es: "Cómo funciona para el usuario",
                en: "How it works for the user"
            },
            "flow-lead": {
                es: "El proceso es simple, voluntario y limitado a la publicación de comentarios en videos de YouTube embebidos en el sitio.",
                en: "The process is simple, optional, and limited to posting comments on YouTube videos embedded on the site."
            },
            "step-1-title": {
                es: "Inicia sesión con Google",
                en: "Sign in with Google"
            },
            "step-1-body": {
                es: "El usuario toca el botón de conexión desde el reproductor y completa la autenticación directamente en Google.",
                en: "The user taps the connect button from the player and completes authentication directly with Google."
            },
            "step-2-title": {
                es: "Autoriza el permiso",
                en: "Authorize the permission"
            },
            "step-2-body": {
                es: "Google muestra la pantalla de consentimiento para que el usuario apruebe el acceso necesario para comentar en YouTube.",
                en: "Google shows the consent screen so the user can approve the access required to comment on YouTube."
            },
            "step-3-title": {
                es: "Publica el comentario",
                en: "Post the comment"
            },
            "step-3-body": {
                es: "Una vez autenticado, el usuario puede escribir y enviar un comentario para el video visible dentro del sitio.",
                en: "Once authenticated, the user can write and submit a comment for the video displayed on the site."
            },
            "flow-callout": {
                es: "El acceso puede revocarse en cualquier momento desde la cuenta de Google del usuario.",
                en: "Access can be revoked at any time from the user's Google account."
            },
            "legal-eyebrow": {
                es: "Información legal",
                en: "Legal information"
            },
            "legal-title": {
                es: "Enlaces visibles para usuarios y revisores",
                en: "Visible links for users and reviewers"
            },
            "legal-lead": {
                es: "Estos enlaces deben permanecer públicos y accesibles sin login para que Google pueda completar la verificación de la app.",
                en: "These links must remain public and accessible without login so Google can complete the app verification."
            },
            "privacy-card-title": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "privacy-card-body": {
                es: "Describe cómo se procesan los datos técnicos, la autenticación con Google y la publicación de comentarios en YouTube.",
                en: "Describes how technical data, Google authentication, and the posting of comments on YouTube are processed."
            },
            "privacy-card-link": {
                es: "Leer política de privacidad",
                en: "Read the Privacy Policy"
            },
            "terms-card-title": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            },
            "terms-card-body": {
                es: "Explican el uso permitido de la función de comentarios, las limitaciones del servicio y la responsabilidad del usuario.",
                en: "Explain the permitted use of the commenting feature, service limitations, and user responsibility."
            },
            "terms-card-link": {
                es: "Leer condiciones del servicio",
                en: "Read the Terms of Service"
            },
            "support-label": {
                es: "Contacto de soporte:",
                en: "Support contact:"
            },
            "footer-privacy": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "footer-terms": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            }
        },
        attrs: {
            "topnav-label": {
                attribute: "aria-label",
                es: "Enlaces legales",
                en: "Legal links"
            },
            "switcher-label": {
                attribute: "aria-label",
                es: "Selector de idioma",
                en: "Language selector"
            }
        }
    },
    privacy: {
        text: {
            "meta-title": {
                es: "Política de privacidad | Comentarios de YouTube de BeHealth PR",
                en: "Privacy Policy | BeHealth PR YouTube Comments"
            },
            "meta-description": {
                es: "Política de privacidad de la integración Comentarios de YouTube de BeHealth PR.",
                en: "Privacy Policy for the BeHealth PR YouTube Comments integration."
            },
            "brand-eyebrow": {
                es: "Google OAuth",
                en: "Google OAuth"
            },
            "brand-name": {
                es: "Comentarios de YouTube de BeHealth PR",
                en: "BeHealth PR YouTube Comments"
            },
            "nav-home": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "nav-privacy": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "nav-terms": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            },
            "lang-switch-label": {
                es: "Idioma",
                en: "Language"
            },
            "page-meta": {
                es: "Documento público para Google Cloud y usuarios finales",
                en: "Public document for Google Cloud and end users"
            },
            "page-title": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "page-lead": {
                es: "Esta página explica cómo se procesan los datos cuando un visitante usa las funciones del sitio relacionadas con videos de YouTube y comentarios publicados mediante Google y YouTube.",
                en: "This page explains how data is processed when a visitor uses the site's features related to YouTube videos and comments published through Google and YouTube."
            },
            "section-1-title": {
                es: "1. Alcance",
                en: "1. Scope"
            },
            "section-1-body": {
                es: "Este sitio utiliza el plugin Reproductor de YouTube para mostrar videos y, de forma opcional, permitir que una persona inicie sesión con su cuenta de Google para publicar comentarios en YouTube desde el sitio.",
                en: "This site uses the YouTube Player plugin to display videos and, optionally, allow a person to sign in with their Google account to publish comments on YouTube from the site."
            },
            "section-2-title": {
                es: "2. Datos que pueden procesarse",
                en: "2. Data that may be processed"
            },
            "section-2-item-1": {
                es: "Datos técnicos del navegador y de la conexión necesarios para cargar el sitio y los videos embebidos.",
                en: "Technical browser and connection data required to load the site and embedded videos."
            },
            "section-2-item-2": {
                es: "Datos enviados por Google y YouTube durante el proceso de autorización, como identificadores de acceso y autorización.",
                en: "Data sent by Google and YouTube during the authorization process, such as access and authorization identifiers."
            },
            "section-2-item-3": {
                es: "El contenido de los comentarios que la persona decide publicar en YouTube.",
                en: "The content of the comments that the person chooses to publish on YouTube."
            },
            "section-3-title": {
                es: "3. Inicio de sesión con Google y comentarios en YouTube",
                en: "3. Google sign-in and YouTube comments"
            },
            "section-3-body-1": {
                es: "Cuando una persona elige conectar su cuenta de Google, la autenticación se realiza en los servicios de Google. Este sitio no solicita ni almacena la contraseña de Google del usuario.",
                en: "When a person chooses to connect their Google account, authentication takes place on Google's services. This site does not request or store the user's Google password."
            },
            "section-3-body-2": {
                es: "Para poder publicar comentarios, el sistema solicita autorización para interactuar con la cuenta de YouTube del usuario. Esa autorización puede revocarse en cualquier momento desde la cuenta de Google del usuario.",
                en: "In order to publish comments, the system requests authorization to interact with the user's YouTube account. That authorization can be revoked at any time from the user's Google account."
            },
            "section-4-title": {
                es: "4. Almacenamiento técnico",
                en: "4. Technical storage"
            },
            "section-4-body": {
                es: "El sitio puede almacenar de forma temporal identificadores técnicos, cookies y tokens de acceso o renovación necesarios para mantener la sesión y permitir la publicación de comentarios solicitada por el usuario.",
                en: "The site may temporarily store technical identifiers, cookies, and access or refresh tokens required to maintain the session and enable the comment posting requested by the user."
            },
            "section-5-title": {
                es: "5. Servicios de terceros",
                en: "5. Third-party services"
            },
            "section-5-body": {
                es: "Los videos, comentarios y el flujo de autenticación dependen de servicios de Google y YouTube. El uso de esos servicios también se encuentra sujeto a sus propias políticas y condiciones.",
                en: "Videos, comments, and the authentication flow depend on Google and YouTube services. The use of those services is also subject to their own policies and terms."
            },
            "section-6-title": {
                es: "6. Finalidad del tratamiento",
                en: "6. Purpose of processing"
            },
            "section-6-body": {
                es: "Los datos se utilizan exclusivamente para mostrar videos, habilitar la autenticación voluntaria del usuario y permitir la publicación de comentarios en YouTube desde el sitio.",
                en: "The data is used exclusively to display videos, enable voluntary user authentication, and allow the publication of comments on YouTube from the site."
            },
            "section-7-title": {
                es: "7. Conservación",
                en: "7. Retention"
            },
            "section-7-body": {
                es: "Los datos técnicos y tokens asociados a la autenticación se conservarán solo durante el tiempo necesario para prestar la funcionalidad solicitada o hasta que caduquen, se eliminen o el usuario revoque el acceso.",
                en: "Technical data and tokens associated with authentication will be retained only for as long as necessary to provide the requested functionality or until they expire, are deleted, or the user revokes access."
            },
            "section-8-title": {
                es: "8. Derechos y contacto",
                en: "8. Rights and contact"
            },
            "section-8-body": {
                es: "Si tienes consultas sobre el tratamiento de datos en este sitio, utiliza los canales de contacto publicados por el responsable del sitio.",
                en: "If you have questions about data processing on this site, use the contact channels published by the site owner."
            },
            "support-label": {
                es: "Contacto de soporte:",
                en: "Support contact:"
            },
            "footer-home": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "footer-terms": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            }
        },
        attrs: {
            "topnav-label": {
                attribute: "aria-label",
                es: "Enlaces legales",
                en: "Legal links"
            },
            "switcher-label": {
                attribute: "aria-label",
                es: "Selector de idioma",
                en: "Language selector"
            }
        }
    },
    terms: {
        text: {
            "meta-title": {
                es: "Condiciones del servicio | Comentarios de YouTube de BeHealth PR",
                en: "Terms of Service | BeHealth PR YouTube Comments"
            },
            "meta-description": {
                es: "Condiciones del servicio de la integración Comentarios de YouTube de BeHealth PR.",
                en: "Terms of Service for the BeHealth PR YouTube Comments integration."
            },
            "brand-eyebrow": {
                es: "Google OAuth",
                en: "Google OAuth"
            },
            "brand-name": {
                es: "Comentarios de YouTube de BeHealth PR",
                en: "BeHealth PR YouTube Comments"
            },
            "nav-home": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "nav-privacy": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            },
            "nav-terms": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            },
            "lang-switch-label": {
                es: "Idioma",
                en: "Language"
            },
            "page-meta": {
                es: "Documento público para Google Cloud y usuarios finales",
                en: "Public document for Google Cloud and end users"
            },
            "page-title": {
                es: "Condiciones del servicio",
                en: "Terms of Service"
            },
            "page-lead": {
                es: "Estas condiciones regulan el uso de las funciones del sitio relacionadas con videos de YouTube, autenticación con Google y publicación de comentarios en YouTube.",
                en: "These terms govern the use of the site's features related to YouTube videos, Google authentication, and the publication of comments on YouTube."
            },
            "section-1-title": {
                es: "1. Uso del servicio",
                en: "1. Use of the service"
            },
            "section-1-body": {
                es: "El sitio permite visualizar contenido de YouTube y, en determinados casos, conectar una cuenta de Google para publicar comentarios en YouTube desde el propio sitio.",
                en: "The site allows users to view YouTube content and, in certain cases, connect a Google account to publish comments on YouTube directly from the site."
            },
            "section-2-title": {
                es: "2. Requisitos",
                en: "2. Requirements"
            },
            "section-2-body": {
                es: "Para comentar, el usuario debe contar con una cuenta de Google válida, una cuenta de YouTube habilitada y aceptar las autorizaciones solicitadas por Google durante el inicio de sesión.",
                en: "To comment, the user must have a valid Google account, an enabled YouTube account, and accept the authorizations requested by Google during sign-in."
            },
            "section-3-title": {
                es: "3. Conducta del usuario",
                en: "3. User conduct"
            },
            "section-3-body": {
                es: "El usuario se compromete a no publicar contenido ilegal, ofensivo, difamatorio, engañoso, no autorizado, spam o que infrinja derechos de terceros. El usuario es el único responsable por los comentarios que publique.",
                en: "The user agrees not to publish illegal, offensive, defamatory, misleading, unauthorized, spam, or rights-infringing content. The user is solely responsible for the comments they publish."
            },
            "section-4-title": {
                es: "4. Servicios de terceros",
                en: "4. Third-party services"
            },
            "section-4-body": {
                es: "La autenticación y la publicación de comentarios dependen de Google y YouTube. La disponibilidad del servicio puede verse afectada por cambios, restricciones, suspensiones o decisiones aplicadas por esos proveedores.",
                en: "Authentication and comment publication depend on Google and YouTube. Service availability may be affected by changes, restrictions, suspensions, or decisions applied by those providers."
            },
            "section-5-title": {
                es: "5. Moderación y limitaciones",
                en: "5. Moderation and limitations"
            },
            "section-5-body": {
                es: "El responsable del sitio puede limitar, desactivar o retirar funcionalidades relacionadas con comentarios, y puede impedir el uso del servicio cuando detecte abuso, riesgo técnico o incumplimiento de estas condiciones.",
                en: "The site owner may limit, disable, or remove features related to comments, and may block use of the service when abuse, technical risk, or non-compliance with these terms is detected."
            },
            "section-6-title": {
                es: "6. Sin garantías",
                en: "6. No warranties"
            },
            "section-6-body": {
                es: "El servicio se ofrece según disponibilidad. No se garantiza continuidad permanente, ausencia de errores ni compatibilidad absoluta con todos los navegadores, cuentas, regiones o configuraciones de terceros.",
                en: "The service is provided as available. Permanent continuity, error-free operation, or full compatibility with all browsers, accounts, regions, or third-party configurations is not guaranteed."
            },
            "section-7-title": {
                es: "7. Responsabilidad",
                en: "7. Liability"
            },
            "section-7-body": {
                es: "El responsable del sitio no asume responsabilidad por interrupciones, bloqueos de cuentas, rechazos de autorización, eliminación de comentarios o cambios aplicados por Google, YouTube o terceros.",
                en: "The site owner assumes no responsibility for interruptions, account blocks, authorization rejections, comment removals, or changes applied by Google, YouTube, or third parties."
            },
            "section-8-title": {
                es: "8. Aceptación",
                en: "8. Acceptance"
            },
            "section-8-body": {
                es: "Al utilizar el sitio y, en particular, al conectar una cuenta de Google para comentar en YouTube, el usuario acepta estas condiciones y la política de privacidad publicada en este sitio.",
                en: "By using the site and, in particular, by connecting a Google account to comment on YouTube, the user accepts these terms and the privacy policy published on this site."
            },
            "support-label": {
                es: "Contacto de soporte:",
                en: "Support contact:"
            },
            "footer-home": {
                es: "Homepage de la app",
                en: "App homepage"
            },
            "footer-privacy": {
                es: "Política de privacidad",
                en: "Privacy Policy"
            }
        },
        attrs: {
            "topnav-label": {
                attribute: "aria-label",
                es: "Enlaces legales",
                en: "Legal links"
            },
            "switcher-label": {
                attribute: "aria-label",
                es: "Selector de idioma",
                en: "Language selector"
            }
        }
    }
};

function getStoredLanguage() {
    try {
        return window.localStorage.getItem(SITE_LANG_KEY);
    } catch (error) {
        return null;
    }
}

function storeLanguage(lang) {
    try {
        window.localStorage.setItem(SITE_LANG_KEY, lang);
    } catch (error) {
        return;
    }
}

function resolveLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (SUPPORTED_LANGS.has(queryLang)) {
        return queryLang;
    }

    const storedLang = getStoredLanguage();
    if (SUPPORTED_LANGS.has(storedLang)) {
        return storedLang;
    }

    return "es";
}

function updateUrlForLanguage(lang) {
    const url = new URL(window.location.href);
    if (lang === "en") {
        url.searchParams.set("lang", "en");
    } else {
        url.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function localizeLinks(lang) {
    const suffix = lang === "en" ? "?lang=en" : "";
    document.querySelectorAll("[data-localized-link]").forEach((link) => {
        const baseHref = link.getAttribute("data-localized-link");
        if (baseHref) {
            link.setAttribute("href", `${baseHref}${suffix}`);
        }
    });
}

function applyTextTranslations(pageTranslations, lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const entry = pageTranslations.text[key];
        if (!entry || !entry[lang]) {
            return;
        }

        element.textContent = entry[lang];
    });
}

function applyAttributeTranslations(pageTranslations, lang) {
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
        const key = element.dataset.i18nAttr;
        const entry = pageTranslations.attrs[key];
        if (!entry || !entry[lang]) {
            return;
        }

        element.setAttribute(entry.attribute, entry[lang]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
        const key = element.dataset.i18nContent;
        const entry = pageTranslations.text[key];
        if (!entry || !entry[lang]) {
            return;
        }

        element.setAttribute("content", entry[lang]);
    });
}

function updateSwitcherState(lang) {
    document.querySelectorAll("[data-lang]").forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function applyLanguage(lang, pageKey) {
    const pageTranslations = translations[pageKey];
    if (!pageTranslations) {
        return;
    }

    document.documentElement.lang = lang;
    applyTextTranslations(pageTranslations, lang);
    applyAttributeTranslations(pageTranslations, lang);
    localizeLinks(lang);
    updateSwitcherState(lang);
    storeLanguage(lang);
}

function bindLanguageSwitcher(pageKey) {
    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang;
            if (!SUPPORTED_LANGS.has(lang)) {
                return;
            }

            updateUrlForLanguage(lang);
            applyLanguage(lang, pageKey);
        });
    });
}

function initI18n() {
    const pageKey = document.body.dataset.page;
    if (!pageKey || !translations[pageKey]) {
        return;
    }

    const lang = resolveLanguage();
    applyLanguage(lang, pageKey);
    bindLanguageSwitcher(pageKey);
}

initI18n();
