<template>
  <div class="md-layout md-gutter md-alignment-top-center">
    <form @submit.prevent="submitTrip">
      <md-card class="md-size-55">
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-autocomplete v-model="selectedCountry" :md-options="availableCountries" required>
                <label>Country</label>
              </md-autocomplete>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <label for="selectedVisa">VISA</label>
                <md-select v-model="selectedVisa" id="selectedVisa" required v-bind:disabled="! selectedCountry">
                  <md-option v-for="visa in availableVisas" :value="visa.id" :key="visa.id">
                    {{ visa.name }} ID: {{ visa.id }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-datepicker v-model="dateFrom" required>
                <label>Entering date:</label>
              </md-datepicker>
            </div>
            <div class="md-layout-item">
              <md-datepicker v-model="dateTo">
                <label>Leaving date:</label>
              </md-datepicker>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="isSaving">Add</md-button>
        </md-card-actions>
      </md-card>
      <md-snackbar :md-active.sync="isSaved">The trip was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewTripForm",
  data: () => {
    return {
      selectedCountry: null,
      selectedVisa: null,
      dateFrom: null,
      dateTo: null,
      isSaving: false,
      isSaved: false,
    }
  },
  computed: {
    availableCountries() {
      return [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ];
    },
    availableVisas() {
      if (this.selectedCountry) {
        return [
          {name: `${this.selectedCountry} | Visa 1`, id: 1},
          {name: `${this.selectedCountry} | Visa 2`, id: 2}
        ]
      } else {
        return [];
      }
    }
  },
  methods: {
    submitTrip() {
      this.isSaving = true;
      // TODO : replace with API call
      window.setTimeout(() => {
        this.isSaved = true
        this.isSaving = false
        this.clearForm()
      }, 1500)
    },

    clearForm(){
      this.dateFrom = null;
      this.dateTo = null;
    }
  },

  mounted() {
    this.country = 'USA';
  }
}
</script>

