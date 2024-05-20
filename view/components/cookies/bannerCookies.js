class cookies extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/view/css/bannerCookies/bannerCookies.css">
        <link rel="stylesheet" href="/view/css/privacyPolicy/privacyPolicy.css">
        
        <div id="cookieBanner" class="legendFont">
            <p>Nós usamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com o
                uso de cookies e com nossa <span class="textLink">política de privacidade</span>.</p>
            <button id="btnAccept" class="btnCookie legendFont">Aceitar</button>
            <button id="bntDecline" class="btnCookie legendFont">Recusar</button>
        </div>
        
        <div id="modalPrivacy">
        
            <div id="topSection">
                <h1 class="sectionTitleFont">Política de privacidade</h1>
                <div class="sectionTitleFont" id="exit">&times;</div>
            </div>
        
            <span class="underline paragraphFont">Última atualização: 26/04/2024</span><br>
        
            <div id="paragraphBox">
                <p class="legendFont">
                    Agradecemos por visitar o nosso site. A privacidade dos nossos visitantes é de extrema importância para nós.
                    Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações que você nos
                    fornece ao
                    usar este site.<br>
        
                    Se tiver dúvidas adicionais ou precisar de mais informações sobre nossa Política de Privacidade, não hesite
                    em
                    nos contatar.<br>
        
                    <span class="paragraphFont">Informações que Coletamos</span><br>
                    Quando você visita o nosso site, podemos coletar automaticamente certas informações sobre o seu dispositivo,
                    incluindo informações sobre seu navegador da web, endereço IP, fuso horário e alguns dos cookies que estão
                    instalados no seu dispositivo. Além disso, à medida que você navega pelo site, podemos coletar informações
                    sobre
                    as páginas da web ou produtos que você visualiza, quais sites ou termos de pesquisa o encaminharam ao nosso
                    site
                    e informações sobre como você interage com o site.<br>
        
                    <span class="paragraphFont">Uso de Cookies</span><br>
                    Utilizamos cookies para melhorar a experiência do usuário em nosso site, personalizar o conteúdo e anúncios,
                    fornecer recursos de mídia social e analisar nosso tráfego. Você pode optar por recusar todos ou alguns
                    cookies
                    por meio das configurações do seu navegador. No entanto, observe que a desativação de cookies pode afetar a
                    funcionalidade e a experiência ao usar nosso site.<br>
        
                    <span class="paragraphFont">Uso das Informações</span><br>
                    As informações que coletamos são utilizadas para entender as preferências dos nossos visitantes e melhorar
                    continuamente a experiência do usuário em nosso site. Além disso, podemos usar as informações para
                    personalizar
                    o conteúdo e os anúncios exibidos para você e para fornecer informações ou ofertas relevantes.<br>
        
                    <span class="paragraphFont">Compartilhamento de Informações</span><br>
                    Não compartilhamos, vendemos ou alugamos suas informações pessoais a terceiros sem o seu consentimento,
                    exceto
                    quando exigido por lei ou quando acreditamos de boa-fé que a divulgação é necessária para proteger nossos
                    direitos, sua segurança ou a segurança de terceiros.<br>
        
                    <span class="paragraphFont">Links para Outros Sites</span><br>
                    Nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de
                    terceiros, será direcionado para o site desse terceiro. Recomendamos que você revise a Política de
                    Privacidade
                    de cada site que visita.<br>
        
                    <span class="paragraphFont">Privacidade das Crianças</span><br>
                    Nosso site não se destina a menores de 13 anos. Não coletamos intencionalmente informações pessoais de
                    crianças
                    menores de 13 anos. Se você acredita que coletamos informações de uma criança sem o consentimento dos pais,
                    entre em contato conosco para que possamos remover essas informações o mais rápido possível.<br>
        
                    <span class="paragraphFont">Alterações na Política de Privacidade</span><br>
                    Reservamo-nos o direito de atualizar ou alterar nossa Política de Privacidade a qualquer momento. As
                    alterações
                    serão efetivas imediatamente após sua publicação nesta página.<br>
        
                    <span class="paragraphFont">Consentimento</span><br>
                    Ao usar nosso site, você concorda com nossa Política de Privacidade e concorda com seus termos.<br>
        
                    <span class="paragraphFont">Contato</span><br>
                    Se você tiver alguma dúvida ou preocupação sobre nossa Política de Privacidade, entre em contato conosco
                    através
                    do seguinte endereço de e-mail: [Inserir e-mail de contato].<br>
        
                    Obrigado por confiar em nós com suas informações pessoais. Estamos comprometidos em proteger sua privacidade
                    e
                    manter a confiança que você deposita em nós.<br>
                </p>
            </div>
        </div> 
 `;
    }
};
customElements.define('cookies-component', cookies);

const btnAccept = document.querySelector('#btnAccept');
const bntDecline = document.querySelector('#bntDecline');
const exit = document.querySelector('#exit');

btnAccept.addEventListener('click', function () {
    cookieBanner.style.display = 'none';
})

bntDecline.addEventListener('click', function () {
    cookieBanner.style.display = 'none';
})

modalPrivacy = document.querySelector('#modalPrivacy');
textLink = document.querySelector('.textLink');

modalPrivacy.style.display = 'none';
textLink.addEventListener('click', function () {
    modalPrivacy.style.display = 'block';
})

exit.addEventListener('click', function () {modalPrivacy.style.display = 'none';})

