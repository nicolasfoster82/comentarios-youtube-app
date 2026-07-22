const SITE_LANG_KEY = "bpr-site-lang";
const SUPPORTED_LANGS = new Set(["es", "en"]);

const translations = {
    home: {
        text: {
            "meta-title": {
                es: "BeHealth PR Comentarios",
                en: "BeHealth PR Comentarios"
            },
            "meta-description": {
                es: "Homepage pública de la aplicación BeHealth PR Comentarios.",
                en: "Public homepage for the BeHealth PR Comentarios application."
            },
            "brand-eyebrow": {
                es: "BeHealth PR",
                en: "BeHealth PR"
            },
            "brand-name": {
                es: "BeHealth PR Comentarios",
                en: "BeHealth PR Comentarios"
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
                es: "BeHealth PR Comentarios",
                en: "BeHealth PR Comentarios"
            },
            "hero-lead": {
                es: "BeHealth PR Comentarios es una funcionalidad implementada mediante un plugin de WordPress en este sitio. Permite que los visitantes inicien sesión con su cuenta de Google para publicar comentarios en videos de YouTube embebidos dentro de BeHealth PR.",
                en: "BeHealth PR Comentarios is a feature implemented through a WordPress plugin on this site. It allows visitors to sign in with their Google account to post comments on YouTube videos embedded within BeHealth PR."
            },
            "independence-disclaimer": {
                es: "BeHealth PR Comentarios es una aplicación propia de BeHealth PR e independiente de Google y YouTube. No está afiliada, patrocinada ni respaldada por esas empresas.",
                en: "BeHealth PR Comentarios is operated by BeHealth PR and is independent from Google and YouTube. It is not affiliated with, sponsored by, or endorsed by those companies."
            },
            "stat-1-label": {
                es: "Autenticación",
                en: "Authentication"
            },
            "stat-1-title": {
                es: "Conexión autorizada",
                en: "Authorized connection"
            },
            "stat-1-body": {
                es: "La app usa el flujo de autorización de Google únicamente para autenticar al usuario y solicitar el permiso necesario para comentar en YouTube.",
                en: "The app uses Google's authorization flow only to authenticate the user and request the permission required to comment on YouTube."
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
                es: "Estos enlaces permanecen públicos y accesibles sin iniciar sesión para que cualquier usuario pueda consultar cómo funciona la aplicación.",
                en: "These links remain public and accessible without signing in so that any user can review how the application works."
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
                es: "Política de privacidad | BeHealth PR Comentarios",
                en: "Privacy Policy | BeHealth PR Comentarios"
            },
            "meta-description": {
                es: "Política de privacidad de la aplicación BeHealth PR Comentarios.",
                en: "Privacy Policy for the BeHealth PR Comentarios application."
            },
            "brand-eyebrow": {
                es: "BeHealth PR",
                en: "BeHealth PR"
            },
            "brand-name": {
                es: "BeHealth PR Comentarios",
                en: "BeHealth PR Comentarios"
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
                es: "Documento legal público para usuarios finales",
                en: "Public legal document for end users"
            },
            "last-updated": {
                es: "Última actualización: 22 de julio de 2026",
                en: "Last updated: July 22, 2026"
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
                es: "1. Responsable y alcance",
                en: "1. Data controller and scope"
            },
            "section-1-body": {
                es: "BeHealth PR es responsable del tratamiento descrito en esta política. BeHealth PR Comentarios es una aplicación propia de BeHealth PR e independiente de Google y YouTube; no está afiliada, patrocinada ni respaldada por esas empresas. Utiliza un plugin para mostrar videos y, de forma opcional, permitir que una persona conecte su cuenta de Google y publique en YouTube el comentario que haya escrito y confirmado.",
                en: "BeHealth PR is responsible for the processing described in this policy. BeHealth PR Comentarios is operated by BeHealth PR and is independent from Google and YouTube; it is not affiliated with, sponsored by, or endorsed by those companies. It uses a plugin to display videos and, optionally, allow a person to connect their Google account and publish on YouTube the comment they have written and confirmed."
            },
            "section-2-title": {
                es: "2. Datos del usuario de Google a los que accedemos",
                en: "2. Google user data we access"
            },
            "section-2-item-1": {
                es: "El código de autorización y los tokens OAuth de acceso o renovación emitidos por Google después del consentimiento del usuario.",
                en: "The authorization code and OAuth access or refresh tokens issued by Google after the user gives consent."
            },
            "section-2-item-2": {
                es: "Los identificadores de cuenta o canal de YouTube que la API proporcione y que sean necesarios para asociar la acción con la cuenta autenticada.",
                en: "YouTube account or channel identifiers provided by the API that are necessary to associate the action with the authenticated account."
            },
            "section-2-item-3": {
                es: "El texto del comentario que el usuario escribe y decide enviar, junto con el identificador del video de YouTube en el que se publicará.",
                en: "The comment text that the user writes and chooses to submit, together with the identifier of the YouTube video on which it will be posted."
            },
            "section-2-item-4": {
                es: "Datos técnicos del navegador, la conexión y registros de seguridad necesarios para entregar y proteger el servicio.",
                en: "Technical browser and connection data and security logs needed to deliver and protect the service."
            },
            "section-2-body": {
                es: "La aplicación no solicita ni almacena la contraseña de Google y no accede a correos electrónicos, contactos, archivos de Drive, fotografías ni otros datos de Google ajenos a la función de publicar comentarios en YouTube.",
                en: "The application does not request or store the user's Google password and does not access emails, contacts, Drive files, photos, or other Google data unrelated to the YouTube comment-posting feature."
            },
            "section-3-title": {
                es: "3. Cómo accedemos a los datos",
                en: "3. How we access the data"
            },
            "section-3-body": {
                es: "El acceso comienza únicamente cuando el usuario selecciona la opción para conectarse. La autenticación y el consentimiento se realizan directamente en Google. Después de que el usuario autoriza el permiso solicitado, Google entrega a la aplicación credenciales OAuth limitadas, que se usan para enviar a la API de YouTube el comentario que el propio usuario confirma. La aplicación no publica comentarios sin esa acción expresa.",
                en: "Access begins only when the user selects the option to connect. Authentication and consent take place directly with Google. After the user authorizes the requested permission, Google provides the application with limited OAuth credentials, which are used to send the comment confirmed by the user to the YouTube API. The application does not post comments without that explicit action."
            },
            "section-4-title": {
                es: "4. Uso de los datos",
                en: "4. How we use the data"
            },
            "section-4-body": {
                es: "Usamos los datos del usuario de Google exclusivamente para autenticar la cuenta, mantener la sesión autorizada y publicar mediante la API de YouTube el comentario solicitado por el usuario en el video seleccionado. No utilizamos esos datos para publicidad, elaboración de perfiles, evaluaciones crediticias ni finalidades distintas de esta función visible.",
                en: "We use Google user data exclusively to authenticate the account, maintain the authorized session, and post through the YouTube API the comment requested by the user on the selected video. We do not use this data for advertising, profiling, credit assessment, or purposes unrelated to this visible feature."
            },
            "section-5-title": {
                es: "5. Almacenamiento y conservación",
                en: "5. Storage and retention"
            },
            "section-5-item-1": {
                es: "Las cookies de sesión y los identificadores técnicos se conservan solo mientras sean necesarios para operar y proteger la sesión.",
                en: "Session cookies and technical identifiers are retained only while needed to operate and protect the session."
            },
            "section-5-item-2": {
                es: "Los tokens OAuth se conservan únicamente durante el tiempo necesario para ofrecer la función autorizada, hasta que caduquen, el usuario desconecte su cuenta, solicite su eliminación o revoque el acceso.",
                en: "OAuth tokens are retained only for as long as needed to provide the authorized feature, until they expire, the user disconnects their account, requests deletion, or revokes access."
            },
            "section-5-item-3": {
                es: "La aplicación no conserva una copia del comentario con una finalidad independiente. Una vez publicado, Google y YouTube conservan el comentario conforme a la configuración de la cuenta y a sus propias políticas.",
                en: "The application does not retain a copy of the comment for an independent purpose. Once posted, Google and YouTube retain the comment according to the account settings and their own policies."
            },
            "section-5-item-4": {
                es: "Los registros técnicos y de seguridad se conservan solo durante el período razonablemente necesario para operar, diagnosticar y proteger el servicio.",
                en: "Technical and security logs are retained only for the period reasonably necessary to operate, diagnose, and protect the service."
            },
            "section-6-title": {
                es: "6. Con quién compartimos, transferimos o divulgamos datos",
                en: "6. Who we share, transfer, or disclose data to"
            },
            "section-6-item-1": {
                es: "Google LLC y YouTube: intercambiamos las credenciales OAuth necesarias con Google y enviamos a la API de YouTube el identificador del video y el comentario confirmado, exclusivamente para autenticar al usuario y ejecutar la publicación solicitada. El comentario publicado puede quedar visible en YouTube y asociado a la cuenta o canal del usuario, según su configuración.",
                en: "Google LLC and YouTube: we exchange the necessary OAuth credentials with Google and send the video identifier and confirmed comment to the YouTube API solely to authenticate the user and carry out the requested publication. The posted comment may be visible on YouTube and associated with the user's account or channel, depending on their settings."
            },
            "section-6-item-2": {
                es: "Proveedores de alojamiento e infraestructura de BeHealth PR: pueden procesar solicitudes, datos de sesión y registros técnicos solo en la medida necesaria para alojar, operar y proteger la aplicación, sujetos a obligaciones de confidencialidad y seguridad y sin autorización para usarlos con fines propios.",
                en: "BeHealth PR hosting and infrastructure providers: they may process requests, session data, and technical logs only to the extent necessary to host, operate, and protect the application, subject to confidentiality and security obligations and without permission to use them for their own purposes."
            },
            "section-6-body": {
                es: "No vendemos datos del usuario de Google ni los compartimos, transferimos o divulgamos a anunciantes, redes publicitarias, corredores de datos u otros terceros para sus propios fines. Fuera de los destinatarios indicados, solo podremos divulgar datos cuando el usuario lo autorice expresamente, cuando sea necesario para investigar abuso o incidentes de seguridad, o cuando lo exija la ley aplicable.",
                en: "We do not sell Google user data or share, transfer, or disclose it to advertisers, advertising networks, data brokers, or other third parties for their own purposes. Other than the recipients listed above, we may disclose data only when the user expressly authorizes it, when necessary to investigate abuse or security incidents, or when required by applicable law."
            },
            "section-7-title": {
                es: "7. Protección de datos sensibles",
                en: "7. Protection of sensitive data"
            },
            "section-7-body": {
                es: "Tratamos los tokens OAuth y demás credenciales de autorización como datos confidenciales. Las conexiones entre el navegador, nuestros servidores y las API de Google se protegen mediante HTTPS/TLS. Los tokens se mantienen en sistemas del servidor no accesibles desde el contenido público del sitio; el acceso administrativo se restringe a personal autorizado mediante controles de acceso y el principio de mínimo privilegio. También aplicamos actualizaciones de seguridad, revisión de accesos y procedimientos para revocar o eliminar credenciales que ya no sean necesarias.",
                en: "We treat OAuth tokens and other authorization credentials as confidential data. Connections between the browser, our servers, and Google APIs are protected using HTTPS/TLS. Tokens are kept in server systems that are not accessible from the site's public content; administrative access is restricted to authorized personnel through access controls and the principle of least privilege. We also apply security updates, access reviews, and procedures to revoke or delete credentials that are no longer needed."
            },
            "section-8-title": {
                es: "8. Uso limitado de datos de Google",
                en: "8. Limited Use of Google data"
            },
            "section-8-body": {
                es: "El uso y la transferencia a cualquier otra aplicación de la información recibida de las API de Google cumplirán la Política de Datos de Usuario de los Servicios de API de Google, incluidos sus requisitos de Uso limitado. Ninguna persona accede al contenido de los datos del usuario de Google salvo con el consentimiento expreso del usuario, por motivos de seguridad, para cumplir la ley o cuando los datos estén agregados y se usen para operaciones internas legítimas.",
                en: "The use and transfer to any other application of information received from Google APIs will adhere to the Google API Services User Data Policy, including its Limited Use requirements. No person accesses the content of Google user data except with the user's express consent, for security purposes, to comply with the law, or when the data is aggregated and used for legitimate internal operations."
            },
            "google-data-policy-link": {
                es: "Consultar la Política de Datos de Usuario de los Servicios de API de Google",
                en: "Read the Google API Services User Data Policy"
            },
            "section-9-title": {
                es: "9. Revocación y eliminación",
                en: "9. Revocation and deletion"
            },
            "section-9-body": {
                es: "El usuario puede revocar el acceso de la aplicación desde la sección de conexiones de terceros de su Cuenta de Google. También puede solicitar la eliminación de los tokens y otros datos de Google que conserve la aplicación escribiendo a nicolas@behealthpr.com. Procesaremos la solicitud y eliminaremos o anonimizaremos los datos que no debamos conservar por ley. Para eliminar un comentario ya publicado, el usuario debe hacerlo desde YouTube o solicitarlo mediante los mecanismos de YouTube.",
                en: "The user can revoke the application's access from the third-party connections section of their Google Account. They can also request deletion of tokens and other Google data retained by the application by emailing nicolas@behealthpr.com. We will process the request and delete or anonymize data that we are not legally required to retain. To delete an already-posted comment, the user must do so from YouTube or request it through YouTube's mechanisms."
            },
            "google-connections-link": {
                es: "Administrar conexiones de terceros en la Cuenta de Google",
                en: "Manage third-party connections in your Google Account"
            },
            "section-10-title": {
                es: "10. Contacto y cambios",
                en: "10. Contact and changes"
            },
            "section-10-body": {
                es: "Para consultas sobre privacidad o para ejercer derechos de acceso, corrección o eliminación, escribe a nicolas@behealthpr.com. Actualizaremos esta política si cambia la forma en que la aplicación accede, usa, almacena o comparte datos del usuario de Google, e indicaremos la fecha de la revisión en esta página.",
                en: "For privacy questions or to exercise rights of access, correction, or deletion, email nicolas@behealthpr.com. We will update this policy if the way the application accesses, uses, stores, or shares Google user data changes, and we will indicate the revision date on this page."
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
                es: "Condiciones del servicio | BeHealth PR Comentarios",
                en: "Terms of Service | BeHealth PR Comentarios"
            },
            "meta-description": {
                es: "Condiciones del servicio de la aplicación BeHealth PR Comentarios.",
                en: "Terms of Service for the BeHealth PR Comentarios application."
            },
            "brand-eyebrow": {
                es: "BeHealth PR",
                en: "BeHealth PR"
            },
            "brand-name": {
                es: "BeHealth PR Comentarios",
                en: "BeHealth PR Comentarios"
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
                es: "Documento legal público para usuarios finales",
                en: "Public legal document for end users"
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
                es: "BeHealth PR Comentarios es una aplicación propia de BeHealth PR e independiente de Google y YouTube; no está afiliada, patrocinada ni respaldada por esas empresas. Permite visualizar contenido de YouTube y, en determinados casos, conectar una cuenta de Google para publicar comentarios en YouTube desde el sitio.",
                en: "BeHealth PR Comentarios is operated by BeHealth PR and is independent from Google and YouTube; it is not affiliated with, sponsored by, or endorsed by those companies. It allows users to view YouTube content and, in certain cases, connect a Google account to publish comments on YouTube from the site."
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
