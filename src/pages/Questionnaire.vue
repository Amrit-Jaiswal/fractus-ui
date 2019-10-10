<template>
<form>
  <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
      
        <h4 class="title">Questionnaire</h4>
        <p class="category">Answer the following on scale of 5</p>
      </md-card-header>

      <md-card-content>
        
     <div>
           <label>1. Will the Project release pollutants or any hazardous, toxic or noxious substances to air?</label>
           <br>

           <input type="radio" id="one" value="One" name="q1" v-model="picked">
            <label for="one">Yes</label>
            <br>
            <input type="radio" id="two" value="Two" name="q1" v-model="picked">
            <label for="two">No</label>
            <br>
          </div>

<br>
<div>
          <label>2. Will the Project cause noise and vibration or release of light, heat energy or electromagnetic radiation?</label>
           <br>

           <input type="radio" id="one" value="One" name="q2" v-model="picked">
            <label for="one">Yes</label>
            <br>
            <input type="radio" id="two" value="Two" name="q2" v-model="picked">
            <label for="two">No</label>
            <br>
          </div>
          <br>

<div>
           <label>3. Will construction or operation of the Project use natural resources such as land, water, materials or energy, especially any resources which are non-renewable or in short supply?</label>
           <br>

           <input type="radio" id="one" value="One" name="q3" v-model="picked">
            <label for="one">Yes</label>
            <br>
            <input type="radio" id="two" value="Two" name="q3" v-model="picked">
            <label for="two">No</label>
            <br>
          </div>
          <br>

<div>
           <label>4. Will there be any risk of accidents during construction or operation of the Project which could affect human health or the environment?</label>
           <br>

           <input type="radio" id="one" value="One" name="q4" v-model="picked">
            <label for="one">Yes</label>
            <br>
            <input type="radio" id="two" value="Two" name="q4" v-model="picked">
            <label for="two">No</label>
            <br>
          </div>
            <br>

<div>
             <label>5. Are there an areas or features of historic or cultural importance on or around the location which could be affected by the Project?</label>
           <br>

           <input type="radio" id="one" value="One" name="q5" v-model="picked">
            <label for="one">Yes</label>
            <br>
            <input type="radio" id="two" value="Two" name="q5" v-model="picked">
            <label for="two">No</label>
            <br>
          </div>

          <div class="md-layout-item md-size-200 text-right">
            <md-button class="md-raised md-success">Save</md-button>
          </div>
      
      </md-card-content>
    </md-card>
  </form>
  
</template>
<script>
export default {
  name: "question-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
  }
};
</script>
<style></style>
