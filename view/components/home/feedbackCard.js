class FeedbackCard extends HTMLElement {

    static attributes = ['user', 'message', 'stars'];

    constructor() {
        super();
        this.user = this.getAttribute(FeedbackCard.attributes[0]);
        this.message = this.getAttribute(FeedbackCard.attributes[1]);
        this.stars = parseInt(this.getAttribute(FeedbackCard.attributes[2]));
        this.rating = ``;

        for (let index = 0; index < 5; index++) {
            if (index < this.stars) {
                this.rating += `<img class="star active">`;
            } else {
                this.rating += `<img class="star">`;
            }
        }

    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="feedbackCard.css">
            <div class="feedbackCard">
                <p id="feedbackTitle" class="sectionSubtitleFont">${this.user}</p>
                <p id="feedbackBody" class="paragraphFont">${this.message}</p>
                <div id="stars">
                    ${this.rating}
                </div>
            </div>
        `;
    }
}

customElements.define('feedback-card', FeedbackCard);