<template>
  <section id="staffArea" class="staff-area">
    <div class="container">
      <div class="title">
        <img
          src="~assets/images/staff-area/staff-title.png"
          alt="YouthSignal Staff"
        />
      </div>
      <div class="members-container">
        <div v-for="staff in staffs" :key="staff.id" class="member">
          <p class="role">{{ staff.role }}</p>
          <p class="name">
            <span>{{ staff.name }}</span>
            <span v-if="staff.twitterId !== ''" style="float: right;">
              <a
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
  name: 'StaffArea',
  computed: {
    ...mapState('staff', {
      staffs: 'list',
    }),
  },
}
</script>

<style scoped lang="scss">
.staff-area {
  .container {
    img {
      width: 100%;
      height: auto;
    }
  }
  .members-container {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 2rem;
    .member {
      width: 46%;
      .role {
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
      .name {
        font-size: 1.4rem;
        a {
          color: #e04700;
        }
      }
    }
  }
}

// スマホ＆タブレット
@media (max-width: 768px) {
  .staff-area {
    .members-container {
      .member {
        .name {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
