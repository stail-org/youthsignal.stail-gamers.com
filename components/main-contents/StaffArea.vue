<template>
  <section id="staffArea" class="StaffArea area-section">
    <div class="compact-container">
      <div class="StaffArea__Title">
        <img
          class="width-100 responsive"
          src="~/assets/images/staff-area/staff-title.png"
          alt="YouthSignal Staff"
        />
      </div>
      <b-row class="StaffArea__Members mt-5" cols="2">
        <b-col
          v-for="staff in staffs"
          :key="staff.id"
          class="StaffArea__Members__Item"
        >
          <p class="StaffArea__Members__Item__Role m-0 pb-2">
            {{ staff.role }}
          </p>
          <p class="StaffArea__Members__Item__Name mt-1">
            <span>{{ staff.name }}</span>
            <span v-if="staff.twitterId !== ''" style="float: right;">
              <a
                class="StaffArea__Members__Item__Name--Twitter red"
                :href="`https://twitter.com/${staff.twitterId}/`"
                target="_blank"
                rel="noopener noreferrer"
                >twitter.com</a
              >
            </span>
          </p>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { staffStore } from '~/store'

@Component
export default class StaffArea extends Vue {
  get staffs() {
    return staffStore.list
  }
}
</script>

<style scoped lang="scss">
.StaffArea {
  &__Members {
    &__Item {
      &__Role {
        font-size: 0.8rem;
        background-image: linear-gradient(
          to right,
          white 15%,
          rgba(255, 255, 255, 0) 0%
        );
        background-repeat: repeat-x;
        background-position: left 2px bottom 0;
        background-size: 10px 2px;
      }
      &__Name {
        font-size: 1.4rem;
        @media (max-width: $--sm) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
