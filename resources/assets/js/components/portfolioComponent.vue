<template>
    <section class="uk-section uk-section-default portfolio uk-container uk-padding-small" id="portfolio">
			<article>
				<h2>Portfolio</h2>
				<div class="uk-container">
					<section class="uk-flex uk-grid uk-child-width-1-3@m uk-section uk-grid-match" uk-grid>
							<div v-for="portfolio in Portfolios" :key="portfolio.id">
									<div class="uk-card uk-card-default uk-card-hover">
										<div class="uk-card-media" v-html="portfolio.image">

										</div>
										<div class="uk-card-body">
											<h3 class="uk-card-title">
                                                <a :href="portfolio.url" class="uk-link-text uk-link-heading" target="_blank">{{portfolio.name}}</a></h3>
											<p> {{portfolio.date}}</p>
										</div>
										<div class="uk-card-footer uk-text-center">
											<a target="_blank" :href="portfolio.url" class="uk-button uk-button-secondary">View</a>
										</div>
									</div>
								</div>
					</section>
				</div>
			</article>
		</section>
</template>

<script>
const getImage = url => {
  return window.cl
    .imageTag(url, {
      type: "fetch",
      width: "auto",
      responsive: "true",
      crop: "scale",
      responsive_placeholder: "blank",
      quality: "auto",
      fetch_format: "auto",
      client_hints: "true"
    })
    .toHtml();
};  
const Portfolios = [
  {
    name: "Currency Converter",
    url: "https://lonelytomb.github.io/currencyConverter/",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433450/netwiq/currencyConverter.png"
    ),
    date: "August, 2018"
  },
  {
    name: "Headlines",
    url: "https://headlines-03.firebaseapp.com/#/",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433369/headlines.png"
    ),
    date: "April, 2018"
  },
  {
    name: "SIC",
    url: "https://student-information-center.herokuapp.com/",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433445/sic.png"
    ),
    date: "November, 2017"
  },
  {
    name: "Tufafii",
    url: "https://tufafii.netwiq.com.ng/public/index.php",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433458/netwiq/tufafii.png"
    ),
    date: "October, 2017"
  },
  {
    name: "HMS",
    url: "http://hms.netwiq.com.ng",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433447/netwiq/hms.jpg"
    ),
    date: "July, 2017"
  },
  {
    name: "Movefree",
    url: "https://projects.netwiq.com.ng/movefree/",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433453/netwiq/movefree.jpg"
    ),
    date: "September, 2016"
  },
  {
    name: "Washman",
    url: "https://projects.netwiq.com.ng/washman/",
    image: getImage(
      "https://res.cloudinary.com/nazarick/image/upload/v1537433465/netwiq/washman.png"
    ),
    date: "September, 2015"
  }
];
export default {
  name: "Portfolio",
  data() {
    return {
      Portfolios
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.portfolio {
  .uk-card {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
}
</style>
