# Cómo crear un bot automatizado de Twitter con GPT, Python y GCP

Te voy a contar cómo hice un bot automatizado de Twitter que crea sus propios tweets usando la API de OpenAI.

## Pasos previos

Antes de empezar necesitamos tres cosas:

- Una cuenta de Twitter Developer
- Una cuenta en la API de OpenAI
- Un proyecto creado en Google Cloud Platform

Vamos a ver cómo conseguimos estas cosas.

### Twitter Developer Account

Para hacerte una cuenta de Twitter Developer y tener acceso a las API de Twitter, haz lo siguiente:

1. **Créate una cuenta de Twitter**: 
    Si aún no tienes una cuenta en Twitter, necesitas crear una. Es recomendable que configures tu cuenta con una foto de perfil, biografía y número de teléfono verificado. Para que Elon Musk vea que eres de fiar.

2. **Regístrate en el Portal de Desarrolladores**:
    Ve a [Twitter Developers](https://developer.twitter.com/) y regístrate. No voy a decirte cómo registrarte porque cambian el proceso cada dos por tres.
    Si tu solicitud es aceptada, recibirás un correo electrónico de confirmación y podrás empezar a usar las herramientas para desarrolladores de Twitter. Si Twitter tiene preguntas adicionales o necesita más información sobre tu solicitud, es posible que te contacten para obtener más detalles.

3. **Configurar tu aplicación**:
    Una vez dentro del portal, puedes crear una App que te proporcionará las claves API y tokens de acceso necesarios para interactuar con la API de Twitter.

    ![Crear App](create_app.png)

    > **IMPORTANTE**: Acuérdate de guardar las API Keys que te dan después de crear la App, o las tendrás que reestablecer luego.

    En especial necesitaremos: API Key, API Key Secret, Access Token y Access Token Secret. Estas dos últimas se consiguen yendo al apartado "Keys and tokens" de tu App y generándolas:

    ![Generar Access Keys](generar_access_keys.png)

### OpenAI API

Para crear una cuenta y acceder a la API de OpenAI, sigue los siguientes pasos:

1. **Regístrate en OpenAI**: 
   Dirígete al sitio web oficial de OpenAI para registrarte: [https://platform.openai.com/signup](https://platform.openai.com/signup).

2. **Consigue la API Key**:
   Una vez registrado, ve a [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys), busca la opción para crear una nueva clave API (API Key). Esta clave te permitirá hacer llamadas a la API de OpenAI desde tu código.

3. **Configura la facturación** (opcional):
    La API de OpenAI te ofrece 5$ de créditos gratis a lo largo de 3 meses. Sin embargo, mi recomendación es que actives la facturación para que cuando se acaben los créditos no tengas problemas. Para ello ve a [https://platform.openai.com/account/billing/payment-methods](https://platform.openai.com/account/billing/payment-methods) y configura un método de pago. Los precios de la API son bastante bajos. Puedes ver los precios en [la página de pricing](https://openai.com/pricing#language-models).

    > **IMPORTANTE**: Te aconsejo que actives un límite de facturación mensual. Puedes hacerlo en el apartado de [Usage Limits](https://platform.openai.com/account/billing/limits). Yo lo tengo puesto a 1$, aunque nunca he gastado más de 4 céntimos mensuales.

### Google Cloud Platform

Para este paso, voy a suponer que tienes una cuenta de Google.

1. **Crea un proyecto en GCP**:
    Ve a Google Cloud ([https://cloud.google.com/](https://cloud.google.com/)) e inicia sesión. Serás dirigido al Console de GCP. En el menú desplegable de la parte superior, crea un nuevo proyecto:

    ![Crea un proyecto](crear_proyecto_gcp.png)

    Cuando lo hayas creado, seleccionalo. Debería aparecerte en el desplegable anterior.


2. **Habilitar la facturación**:
    En el panel de navegación izquierdo de de GCP, busca "Facturación". Haz clic en "Vincular una cuenta de facturación" y selecciona la cuenta de facturación que quieras. Si no tienes una, haz clic en "Crear cuenta de facturación" y sigue los pasos. Puede ser que te den una prueba gratis. Acéptala, es gratis.

    ![Facturación GCP](facturacion_gcp.png)

    ![Crear cuenta facturación](crear_cuenta_facturacion.png)

## Desarrollo

### Código

### Implementación en GCP

### Ejecución automática