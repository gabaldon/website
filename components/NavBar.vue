<template>
  <div :class="{ drop: isMenuVisible }" class="navbar-container">
    <nav class="navbar">
      <div class="logo-container">
        <img
          class="logo"
          src="@/assets/images/witnet_logo.svg"
          alt=""
          aria-hidden="true"
        />
        <div class="responsive-nav">
          <!-- This prevents the error: 'DOMException: Failed to execute 'insertBefore' on 'Node'' -->
          <div v-show="!isMenuVisible" class="responsive-lng">
            <LanguageSelector />
          </div>
          <label
            v-if="!isMenuVisible"
            class="responsive-menu"
            @click="toggleMenu"
          >
            &#9776;
          </label>
          <label
            v-if="isMenuVisible"
            class="responsive-menu cross"
            @click="toggleMenu"
            >&#x2715;</label
          >
        </div>
      </div>
      <transition name="dropdown" class="dropdown">
        <ul class="tab-container" :class="{ visible: isMenuVisible }">
          <li class="link" @click="hideMenu">
            <InnerLink class="tab" hash="oracle">
              <span class="slash">/</span>{{ $t('nav_bar.route.oracle') }}
            </InnerLink>
          </li>
          <li class="link" @click="hideMenu">
            <InnerLink class="tab" hash="token">
              <span class="slash">/</span>{{ $t('nav_bar.route.token') }}
            </InnerLink>
          </li>
          <li class="link" @click="hideMenu">
            <InnerLink class="tab" hash="ecosystem">
              <span class="slash">/</span>{{ $t('nav_bar.route.ecosystem') }}
            </InnerLink>
          </li>
          <li class="link">
            <a :href="urls.medium" target="_blank" class="tab">
              <span class="slash">/</span>{{ $t('nav_bar.route.blog') }}
            </a>
          </li>
          <li class="link language-component">
            <div class="tab">
              <LanguageSelector />
            </div>
          </li>
          <li
            class="link"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <a class="tab" :href="urls.github" target="_blank">
              <img
                v-if="hover"
                class="social"
                :src="require('@/assets/svg/github-hover.svg')"
                :alt="$t('nav_bar.social_image_alt')"
              />
              <img
                v-else
                class="social"
                :src="require('@/assets/images/github.svg')"
                :alt="$t('nav_bar.social_image_alt')"
              />
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
import { urls } from '../constants'

export default {
  data() {
    return {
      urls,
      hover: false,
      displayBox: false,
      isMenuVisible: false,
    }
  },
  methods: {
    hideMenu() {
      this.isMenuVisible = false
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    onClose() {
      this.active = false
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  max-width: 1050px;
  margin: 0 auto;
  background-color: $white;

  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: $white;

    .logo {
      height: 39px;
    }
  }
  .responsive-nav {
    display: none;
  }
  .tab-container {
    list-style: none;
    display: flex;
    align-items: center;
    & .visible {
      display: block;
    }
    .tab {
      font-size: 1rem;
      display: flex;
      color: $black;
      align-items: center;
      text-decoration: none;
      padding: 24px 32px;
      transition: color 0.1s ease;
      .social {
        margin: auto 8px;
        width: 25px;
      }
      .slash {
        color: $green-1;
      }
      &:hover {
        color: $green-1;
        .slash {
          color: $black;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .drop {
    position: fixed;
    top: 0;
    overflow: hidden;
    height: 100%;
    z-index: 15;
    overflow-y: hidden;
  }
  .navbar {
    display: block;
    position: relative;
    max-width: 100%;
    .logo-container {
      padding: 16px 32px 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 39px;
      }
      .responsive-nav {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        .responsive-menu {
          margin-left: 8px;
          color: $black;
          font-size: 34px;
          cursor: pointer;

          &.cross {
            font-size: 38px;
          }
        }
      }
    }
    .language-component {
      display: none;
    }
    .tab-container {
      background-color: $white;
      list-style: none;
      display: none;
      text-align: center;
      height: 100vh;
      width: 100vw;
      padding: 0;
      margin: 0;
      padding-top: 14vh;
      &.visible {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
