<template>
  <div class="language-switcher" :class="{ 'mobile-menu': screenMenu }">
    <button 
      class="lang-button"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="lang-icon">🌐</span>
      <span class="lang-text">{{ currentLangLabel }}</span>
      <span class="arrow" :class="{ 'arrow-up': isOpen }">▼</span>
    </button>
    
    <div v-if="isOpen" class="lang-dropdown" @click="closeDropdown">
      <a 
        v-for="locale in availableLocales" 
        :key="locale.link"
        :href="locale.link"
        class="lang-option"
        :class="{ active: locale.active }"
      >
        <span class="lang-flag">{{ locale.flag }}</span>
        <span class="lang-label">{{ locale.label }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRouter } from 'vitepress'

interface Props {
  screenMenu?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  screenMenu: false
})

const { site, page } = useData()
const router = useRouter()
const isOpen = ref(false)

const currentLangLabel = computed(() => {
  const currentLocale = site.value.locales?.[page.value.relativePath.split('/')[0] || 'root']
  return currentLocale?.label || site.value.locales?.root?.label || '简体中文'
})

const availableLocales = computed(() => {
  const locales = site.value.locales || {}
  const currentPath = page.value.relativePath
  
  return Object.entries(locales).map(([key, locale]) => {
    let link = '/'
    
    if (key === 'root') {
      // 根路径，如果当前在英文页面，需要去掉 /en 前缀
      if (currentPath.startsWith('en/')) {
        link = '/' + currentPath.replace('en/', '')
      } else {
        link = '/' + currentPath
      }
    } else {
      // 其他语言路径
      if (currentPath.startsWith('en/')) {
        link = '/' + currentPath
      } else {
        link = `/${key}/` + currentPath
      }
    }
    
    // 确保链接格式正确
    if (link.endsWith('.md')) {
      link = link.replace('.md', '')
    }
    if (link.endsWith('/index')) {
      link = link.replace('/index', '/')
    }
    
    return {
      label: locale.label,
      link: link,
      flag: key === 'root' ? '🇨🇳' : '🇺🇸',
      active: (key === 'root' && !currentPath.startsWith('en/')) || 
              (key !== 'root' && currentPath.startsWith(`${key}/`))
    }
  })
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.lang-button:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.lang-icon {
  font-size: 16px;
}

.lang-text {
  font-weight: 500;
}

.arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.arrow-up {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  min-width: 140px;
  z-index: 100;
  overflow: hidden;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-size: 14px;
}

.lang-option:hover {
  background: var(--vp-c-bg-soft);
}

.lang-option.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
}

.lang-flag {
  font-size: 16px;
}

.lang-label {
  font-weight: 500;
}

/* 移动端样式 */
.mobile-menu .lang-button {
  width: 100%;
  justify-content: space-between;
  padding: 12px 16px;
  border: none;
  border-bottom: 1px solid var(--vp-c-divider);
  border-radius: 0;
}

.mobile-menu .lang-dropdown {
  position: static;
  margin-top: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: var(--vp-c-bg);
}

.mobile-menu .lang-option {
  padding: 12px 24px;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.mobile-menu .lang-option:last-child {
  border-bottom: none;
}
</style>