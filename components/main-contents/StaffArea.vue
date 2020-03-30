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
      <div class="StaffArea__Members">
        <div
          v-for="staff in staffs"
          :key="staff.id"
          class="StaffArea__Members__Item"
        >
          <p class="StaffArea__Members__Item__Role">{{ staff.role }}</p>
          <p class="StaffArea__Members__Item__Name">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  StaffArea__Members__Item__Name: 'StaffArea',
  computed: {
    ...mapState('staff', {
      staffs: 'list',
    }),
  },
}
</script>

<style scoped lang="scss">
.StaffArea {
  &__Members {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2rem;
    &__Item {
      width: 46%;
      &__Role {
        padding-bottom: 0.2rem;
        margin-bottom: 0;
        font-family: 'MS P Gothic', sans-serif;
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
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .StaffArea {
    &__Members {
      &__Item {
        &__Name {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
