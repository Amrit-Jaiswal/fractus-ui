<template>
  <form>
    <md-card md-theme-default>
      <md-card-header :data-background-color="green">
        <h4 class="title">Client Company Details</h4>
        <p class="category">Please fill the following details</p>
      </md-card-header>

      <md-card-content>
        <div>
          <label>Name of organization</label>
          <br />
          <input type="text" id="one" value="One" name="option" v-model="picked" />
          <br />

          <md-field>
            <label>Select organization sector</label>
            <md-select v-model="selectSector" name="sector" id="sector">
              <md-option value="a">AGRICULTURE AND ALLIED INDUSTRIES</md-option>
              <md-option value="b">AUTOMOBILES</md-option>
              <md-option value="c">AUTO COMPONENTS</md-option>
              <md-option value="d">AVIATION</md-option>
              <md-option value="e">BANKING</md-option>
              <md-option value="f">CEMENT</md-option>
              <md-option value="g">CONSUMER DURABLES</md-option>
              <md-option value="h">ECOMMERCE</md-option>
              <md-option value="i">EDUCATION AND TRAINING</md-option>
              <md-option value="j">ENGINEERING AND CAPITAL GOODS</md-option>
              <md-option value="k">FINANCIAL SERVICES</md-option>
              <md-option value="l">FMCG</md-option>
              <md-option value="m">GEMS AND JEWELLERY</md-option>
              <md-option value="n">HEALTHCARE</md-option>
              <md-option value="o">INFRASTRUCTURE</md-option>
              <md-option value="p">INSURANCE</md-option>
              <md-option value="q">IT & ITES</md-option>
              <md-option value="r">MANUFACTURING</md-option>
              <md-option value="s">MEDIA AND ENTERTAINMENT</md-option>
              <md-option value="t">METALS AND MINING</md-option>
              <md-option value="u">OIL AND GAS</md-option>
              <md-option value="v">PHARMACEUTICALS</md-option>
              <md-option value="w">PORTS</md-option>
              <md-option value="x">POWER</md-option>
              <md-option value="y">RAILWAYS</md-option>
              <md-option value="z">REAL ESTATE</md-option>
              <md-option value="1">RENEWABLE ENERGY</md-option>
              <md-option value="2">RETAIL</md-option>
              <md-option value="3">ROADS</md-option>
              <md-option value="4">SCIENCE AND TECHNOLOGY</md-option>
              <md-option value="5">SERVICES</md-option>
              <md-option value="6">STEEL</md-option>
              <md-option value="7">TELECOMMUNICATIONS</md-option>
              <md-option value="8">TEXTILES</md-option>
              <md-option value="9">TOURISM AND HOSPITALITY</md-option>
            </md-select>
          </md-field>

          <md-field>
            <label>Select Employee Strength</label>
            <md-select v-model="empStrength" name="empStrength" id="empStrength">
              <md-option value="1">51-100</md-option>
              <md-option value="2">101-1000</md-option>
              <md-option value="3">1001-10000</md-option>
              <md-option value="4">10000+</md-option>
            </md-select>
          </md-field>

          <h4>
            <b2>Project Details: Having Subtype mentioned below:</b2>
          </h4>

          <label>Project Name:</label>
          <br />
          <input type="text" id="one" value="One" name="projectName" v-model="picked" />
          <br />
          <br />

          <label>Project Type:</label>
          <br />
          <input
            type="text"
            id="one"
            value="One"
            name="projectType"
            v-model="picked"
            placeholder="eg. : Chemical, solar energy"
          />
          <br />
          <br />

          <label>Project Location:</label>
          <md-field>
            <label>Country</label>
            <md-select v-model="selectCountry" name="country" id="country">
              <md-option value="1">Afghanistan</md-option>
              <md-option value="2">Albania</md-option>
              <md-option value="3">Argentina</md-option>
              <md-option value="4">Australia</md-option>
              <md-option value="5">Austria</md-option>
              <md-option value="6">Bangladesh</md-option>
              <md-option value="7">Belgium</md-option>
              <md-option value="8">Bhutan</md-option>
              <md-option value="9">Cambodia</md-option>
              <md-option value="10">Canada</md-option>
              <md-option value="11">China</md-option>
              <md-option value="12">Colombia</md-option>
              <md-option value="13">Czechia (Czech Republic)</md-option>
              <md-option value="14">Denmark</md-option>
              <md-option value="15">Egypt</md-option>
              <md-option value="16">Ethiopia</md-option>
              <md-option value="17">Finland</md-option>
              <md-option value="18">France</md-option>
              <md-option value="19">Germany</md-option>
              <md-option value="20">Greece</md-option>
              <md-option value="21">Hungary</md-option>
              <md-option value="22">Iceland</md-option>
              <md-option value="23">India</md-option>
              <md-option value="24">Indonesia</md-option>
              <md-option value="25">Iran</md-option>
              <md-option value="26">Iraq</md-option>
              <md-option value="27">Ireland</md-option>
              <md-option value="28">Israel</md-option>
              <md-option value="29">Italy</md-option>
              <md-option value="30">Japan</md-option>
              <md-option value="31">Malaysia</md-option>
              <md-option value="32">Maldives</md-option>
              <md-option value="33">Mexico</md-option>
              <md-option value="34">Myanmar (formerly Burma)</md-option>
              <md-option value="35">Nepal</md-option>
              <md-option value="36">Netherlands</md-option>
              <md-option value="37">New Zealand</md-option>
              <md-option value="38">Nigeria</md-option>
              <md-option value="39">North Korea</md-option>
              <md-option value="40">Norway</md-option>
              <md-option value="41">Oman</md-option>
              <md-option value="42">Pakistan</md-option>
              <md-option value="43">Philippines</md-option>
              <md-option value="44">Poland</md-option>
              <md-option value="45">Romania</md-option>
              <md-option value="46">Russia</md-option>
              <md-option value="47">Saudi Arabia</md-option>
              <md-option value="48">Singapore</md-option>
              <md-option value="49">South Africa</md-option>
              <md-option value="50">South Korea</md-option>
              <md-option value="51">Sri Lanka</md-option>
              <md-option value="52">Sweden</md-option>
              <md-option value="53">Switzerland</md-option>
              <md-option value="54">Thailand</md-option>
              <md-option value="55">Turkey</md-option>
              <md-option value="56">Turkmenistan</md-option>
              <md-option value="57">Ukraine</md-option>
              <md-option value="58">United Arab Emirates</md-option>
              <md-option value="59">United Kingdom</md-option>
              <md-option value="60">United States of America</md-option>
              <md-option value="61">Vietnam</md-option>
              <md-option value="62">Yemen</md-option>
              <md-option value="63">Zimbabwe</md-option>
            </md-select>
          </md-field>

          <label>City:</label>
          <br />
          <input type="text" id="one" value="One" name="city" v-model="picked" />
          <br />
          <br />

          <label>Total Strength of people for Project:</label>
          <br />
          <input type="text" id="one" value="One" name="projectStrength" v-model="picked" />
          <br />
          <br />

          <label>Project Contact Person Name:</label>
          <br />
          <input type="text" id="one" value="One" name="projectPerson" v-model="picked" />
          <br />
        </div>

        <div class="md-layout-item md-size-200 text-left">
          <md-button class="md-raised md-success">Save</md-button>
        </div>
        <div class="md-layout-item md-size-200 text-right">
          <md-button class="md-raised md-success" to="/ques">Next</md-button>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script lang="js">
  export default  {
    name: 'client-screening',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

