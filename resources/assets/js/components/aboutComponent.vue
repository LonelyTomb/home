<template>
    <section class="uk-section uk-section-default hello uk-container" id="hello">
        <div class="uk-flex uk-grid uk-child-width-1-2@m" uk-grid>
            <section class="uk-flex uk-flex-last@m">
                <figure class="uk-margin-auto uk-margin-auto-vertical uk-box-shadow-bottom">
                    <img class="uk-card uk-card-default uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-card uk-padding-small"
                         data-src="images/char_dominator.png" uk-img>
                </figure>
            </section>
            <section class="uk-section uk-section-default uk-padding-remove-top uk-flex uk-flex-first@m">
                <article class="uk-article">
                    <h2 class="uk-article-title uk-text-left@m uk-text-center">
                        I am Victory Garuba
                    </h2>
                    <p class=""> I am a self-taught Front End Engineer currently located in Lagos, Nigeria.</p>
                    <section>
                        <p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
                            <span class="uk-width-1-6">Phone:</span> <span class="uk-width-5-6 uk-text-left">(+234) 08183659972</span>
                        </p>
                        <p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
                            <span class="uk-width-1-6">Email:</span> <span class="uk-width-5-6  uk-text-left"><a
                                target="_blank"
                                href="mailto:garubav@gmail.com">garubav@gmail.com</a> </span>
                        </p>
                        <p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid>
                            <span class="uk-width-1-6">Address: </span> <span class="uk-width-5-6 uk-text-left">Lagos,Nigeria</span>
                        </p>
                        <p class="uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small" uk-grid style="align-items: center">
                            <span class="uk-width-1-6">Social:</span>
                            <span class="uk-width-5-6 uk-text-left">
                                <span class="uk-button-group">
                                    <a target="_blank" href="http://www.twitter.com/lonelytomb" class="uk-button uk-button-primary uk-padding-remove-horizontal">Twitter</a>
                                <a target="_blank" href="http://www.twitter.com/lonelytomb" uk-icon="icon: twitter" class="uk-button uk-button-primary uk-padding-remove-horizontal"></a>
                                </span>
                                <span class="uk-button-group">
                                    <a target="_blank" href="http://www.twitter.com/lonelytomb" class="uk-button uk-button-secondary uk-padding-remove-horizontal">Github</a>
                                <a target="_blank" href="http://www.github.com/lonelyTomb" uk-icon="icon: github" class="uk-button uk-button-secondary uk-padding-remove-horizontal uk-padding-remove-vertical"></a>
                                </span>
									<span class="uk-button-group">
										<a target="_blank" href="http://www.linkedin.com/in/victory-garuba-a17628114" class="uk-button uk-button-primary uk-padding-remove-horizontal">LinkedIn</a>
                                        <a target="_blank" href="http://www.linkedin.com/in/victory-garuba-a17628114"
                                           uk-icon="icon: linkedin"
                                           class="uk-button uk-button-primary uk-padding-remove-horizontal"></a>
										</span>
                            </span>
                            <span class="uk-button-group">
										<a target="_blank" href="http://www.linkedin.com/in/victory-garuba-a17628114" class="uk-button uk-button-primary uk-padding-remove-horizontal">LinkedIn</a>
                            </span>
                        </p>
                        <div class="uk-margin-top">
                            <a href="#contact" uk-scroll="offset:100;" class="uk-button uk-button-default"> Contact
                                Me</a>
                            <a target="_blank" class="uk-button uk-button-danger"
                               href="https://drive.google.com/open?id=1oX9U6Wtr3yE_10MmzrdMYp5elTmcelKy"> Download
                                CV</a>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    </section>
</template>
<script>
    export default {
        name: "About",
        data() {
            return {};
        }
    };
</script>

<style>
</style>
