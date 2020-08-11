<template>
  <div>
      <header>
        <img src="../assets/wejapa.png" alt="wejap-logo" class="logo" loading="lazy"> 
        <p class="title"><span class="wejapa">Wejapa</span> Countries</p>
        <!-- <audio controls>
            <source src="../assets/japa.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <p>Song by Naira Marley (President Marlian Nation).</p> -->
      </header>
      <div class="country_display">    
        <section>
            <div class="countries">
                <label for="Country">Choose a Country</label>
                <select name="countries" id="countries" v-model="countryPicked" @change="countryPick($event)">
                    <option :value=country.name v-for="country in countries" :key="country.id">{{ country.name}}</option>
                </select>
            </div>
            <div class="states">
                <label for="State">Choose a State</label>
                <select name="states" id="states" v-model="statePicked" @change="statePick($event)">
                    <option :value=state.name v-for="state in states" :key="state.id">{{ state.name }}</option>
                </select>
            </div>
            <div v-if="stateEmptyError" class="error">No states here!</div>
            <div class="cities">
                <label for="City">Choose a City</label>
                <select name="cities" id="cities" v-model="cityPicked">
                    <option :value=city.name v-for="city in cities" :key="city.id">{{ city.name }}</option>
                </select>
            </div>
            <div v-if="cityEmptyError" class="error">No cities here!</div>
        </section>
        <section class="display">
            <div>
                <p>Country: <span>{{ countryPicked }}</span></p>
                <p>State: <span>{{ statePicked }}</span></p>
                <p>City: <span>{{ cityPicked }}</span></p>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
    name:'COuntriesPopulate',
    data() {
        return {
            stateEmptyError: false,
            cityEmptyError: false,
            countryPicked: '',
            statePicked: '',
            cityPicked: '',
            countries: [],
            states: [],
            cities: []
        }
    },
    mounted() {
      this.$http.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json').then(
        response=> {
          return response.json()
          })
        .then(data=> {
          this.countries = data.slice(0, 251);
        })    
    },
    methods: {
        countryPick(event) {
            const state = event.target.value
            const index = this.countries.findIndex((x=>x.name === state))
            const countryHasState = this.countries[index]['states']
            if (countryHasState.length === 0) {
                this.stateEmptyError = !this.stateEmptyError 
                this.states = null   
                this.cities = ""
            } else {
                this.states = countryHasState
                this.stateEmptyError = false
            }
        },
        statePick(event) {
            const state = event.target.value
            const index = this.states.findIndex((x=>x.name === state))
            const city = this.states[index]['cities']
            if (city.length === 0) {
                this.cityEmptyError = !this.cityEmptyError
            } else {
                this.cities = city
                this.cityEmptyError = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
header {
    .logo {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    display: block;
    margin: auto;
    }
    .title {
        color: #63c069;
        text-align: center;
        .wejapa {
            color: #ffcc00;
            font-weight: 600;
            font-size: 24px;           
        }
    }
    audio {
        display: block;
        margin: auto;
    }
    p {
        text-align: center;
    }
}
.country_display {
    width: 60%;
    display: block;
    margin: auto;
    // flex-direction: column;
    justify-content: space-around;
    padding: 50px 0;
    label {
        color: #63c069;
        font-size: 18px;
        font-weight: 600;
    }
    .countries {
        display: flex;
        justify-content: space-between;
    }
    .countries, .states, .cities {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    select {
        padding: 0 5px;
        width: 200px;
        height: 50px;
        margin-left: 30px;
    }
    .error {
        color: red;
        padding: 10px;
        background: lightsalmon;
        text-align: center;
        margin-top: 10px;
    }
}
.display {
    margin-top: 50px;
    span {
        color: #63c069;
        font-weight: 400;
    }
}
@media screen and (max-width: 768px) {
    .country_display {
        padding: 0;
        width: 90%;
    }
}
</style>