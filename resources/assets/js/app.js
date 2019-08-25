/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import cloudinary from "cloudinary-core";
import Spinner from "./components/Spinner.vue";

require('./bootstrap');

window.Vue = Vue;
window.cloudinary = cloudinary;
window.cl = new cloudinary.Cloudinary(require('./../../../cloudinary.json'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    el: '#app',
    components: {
		Spinner:Spinner,
        'about-component': () =>({
            component: import ('./components/aboutComponent.vue'/* webpackChunkName: "about-component" */),
            loading: Spinner
        }),
        'skills-component': () =>({
            component: import ('./components/skillsComponent.vue'/* webpackChunkName: "skills-component" */),
            loading: Spinner
            }),
        'experience-component': () =>({
            component: import ('./components/experienceComponent.vue'/* webpackChunkName: "experience-component" */),
            loading: Spinner
            }),
        'education-component': () =>({
            component: import ('./components/educationComponent.vue'/* webpackChunkName: "education-component" */),
            loading: Spinner
            }),
        'portfolio-component': () =>({
            component: import ('./components/portfolioComponent.vue'/* webpackChunkName: "portfolio-component" */),
            loading: Spinner
            }),
        'contact-component': () =>({
            component: import ('./components/contactComponent.vue'/* webpackChunkName: "contact-component" */),
            loading: Spinner
            }),
    }
});
