# Cómo crear un bot automatizado de Twitter con GPT

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

## Código

## Google Cloud Platform