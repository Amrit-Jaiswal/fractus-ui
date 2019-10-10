<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Sustainable Development Goals</h4>
            <p class="category">
              A healthy environment plays a key role in meeting many of the 17 Sustainable Development Goals. 
              With a little over 10 years left to meet the target date of 2030, 
              the world will need to pick up the pace and put greater efforts in finding better solutions to pollution, 
              climate change and biodiversity loss in order to truly transform societies and economies.
            </p>
          </md-card-header>
          <md-card-content>
            <div class="iframe-container hidden-sm">
              <ul>
              The United Nations Environment Programme (UNEP) is the leading environmental authority in the United Nations system. 
              UNEP uses its expertise to strengthen environmental standards and practices while helping implement environmental obligations at the country, regional and global levels. 
              UNEP’s mission is to provide leadership and encourage partnership in caring for the environment by inspiring, informing, and enabling nations and peoples to improve their quality of life without compromising that of future generations.
<br>
<br>
<li>SIX AREAS OF CONCENTRATION</li>
</ul>
UNEP re-organised its work programme into six strategic areas as part of its move to results based management. The selection of six areas of concentration was guided by scientific evidence, the UNEP mandate and priorities emerging from global and regional forums.
<ol>
<li>CLIMATE CHANGE UNEP strengthens the ability of countries to integrate climate change responses by providing leadership in adaptation, mitigation, technology and finance. UNEP is focusing on facilitating the transition to low-carbon societies, improving the understanding of climate science, facilitating the development of renewable energy and raising public awareness.</li>
<br>

<li> POST-CONFLICT AND DISASTER MANAGEMENT UNEP conducts environmental assessments in crisis-affected countries and provides guidance for implementing legislative and institutional frameworks for improved environmental management. Activities undertaken by UNEP’s Post-Conflict & Disaster Management Branch (PCDMB) include post-conflict environmental assessment in Afghanistan, Côte d’Ivoire, Lebanon, Nigeria and Sudan.</li>
<br>
<li>ECOSYSTEM MANAGEMENT Facilitates management and restoration of ecosystems in a manner consistent with sustainable development, and promotes use of ecosystem services. Examples include the Global Programme of Action (GPA) for the Protection of the Marine Environment from Land-Based Activities.</li>
<br>
<li>ENVIRONMENTAL GOVERNANCE UNEP supports governments in establishing, implementing and strengthening the necessary processes, institutions, laws, policies and programs to achieve sustainable development at the country, regional and global levels, and mainstreaming environment in development planning.</li>
<br>
<li>HARMFUL SUBSTANCES UNEP strives to minimise the impact of harmful substances and hazardous waste on the environment and human beings. UNEP has launched negotiations for a global agreement on mercury, and implements projects on mercury and the Strategic Approach to International Chemicals Management (SAICM) to reduce risks to human health and the environment.</li>
<br>
<li>RESOURCE EFFICIENCY/SUSTAINABLE CONSUMPTION AND PRODUCTION UNEP focuses on regional and global efforts to ensure natural resources are produced, processed and consumed in a more environmentally friendly way. For example, the Marrakesh Process is a global strategy to support the elaboration of a 10-Year Framework of Programs on sustainable consumption and production.</li>
</ol>
            </div>
            <div class="hidden-md">
              <h5>
                The icons are visible on Desktop mode inside an iframe. Since
                the iframe is not working on Mobile and Tablets please visit the
                icons on their original page on Google. Check the
                <a href="https://design.google.com/icons/" target="_blank"
                  >Material Icons</a
                >
              </h5>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/unep-logo.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
