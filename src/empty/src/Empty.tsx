import type { ThemeProps } from '../../_mixins'
import type { ExtractPublicPropTypes } from '../../_utils'
import type { EmptyTheme } from '../styles'
import {
  computed,
  defineComponent,
  h,
  type PropType,
  type SlotsType,
  type VNode,
  type VNodeChild
} from 'vue'
import { NBaseIcon } from '../../_internal/icon'
import { EmptyIcon } from '../../_internal/icons'
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins'
import { createKey } from '../../_utils'
import { emptyLight } from '../styles'
import style from './styles/index.cssr'

export const emptyProps = {
  ...(useTheme.props as ThemeProps<EmptyTheme>),
  description: String,
  showDescription: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<'tiny' | 'small' | 'medium' | 'large' | 'huge'>,
    default: 'medium'
  },
  renderIcon: Function as PropType<() => VNodeChild>
}

export type EmptyProps = ExtractPublicPropTypes<typeof emptyProps>

export interface EmptySlots {
  default?: () => VNode[]
  extra?: () => VNode[]
  icon?: () => VNode[]
}

export default defineComponent({
  name: 'Empty',
  props: emptyProps,
  slots: Object as SlotsType<EmptySlots>,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedComponentPropsRef }
      = useConfig(props)
    const themeRef = useTheme(
      'Empty',
      '-empty',
      style,
      emptyLight,
      props,
      mergedClsPrefixRef
    )
    const { localeRef } = useLocale('Empty')
    const mergedDescriptionRef = computed(() => {
      return (
        props.description ?? mergedComponentPropsRef?.value?.Empty?.description
      )
    })
    const mergedRenderIconRef = computed(
      () =>
        mergedComponentPropsRef?.value?.Empty?.renderIcon
        || (() => <EmptyIcon />)
    )
    const cssVarsRef = computed(() => {
      const { size } = props
      const {
        common: { cubicBezierEaseInOut },
        self: {
          [createKey('iconSize', size)]: iconSize,
          [createKey('fontSize', size)]: fontSize,
          textColor,
          iconColor,
          extraTextColor
        }
      } = themeRef.value
      return {
        '--n-icon-size': iconSize,
        '--n-font-size': fontSize,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-text-color': textColor,
        '--n-icon-color': iconColor,
        '--n-extra-text-color': extraTextColor
      }
    })
    const themeClassHandle = inlineThemeDisabled
      ? useThemeClass(
          'empty',
          computed(() => {
            let hash = ''
            const { size } = props
            hash += size[0]
            return hash
          }),
          cssVarsRef,
          props
        )
      : undefined
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description
      }),
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle?.themeClass,
      onRender: themeClassHandle?.onRender
    }
  },
  render() {
    const { $slots, mergedClsPrefix, onRender } = this
    onRender?.()
    return (
      <div
        class={[`${mergedClsPrefix}-empty`, this.themeClass]}
        style={this.cssVars as any}
      >
        {this.showIcon ? (
          <div class={`${mergedClsPrefix}-empty__icon`}>
            {$slots.icon ? (
              $slots.icon()
            ) : (
              <NBaseIcon clsPrefix={mergedClsPrefix}>
                {{ default: this.mergedRenderIcon }}
              </NBaseIcon>
            )}
          </div>
        ) : null}
        {this.showDescription ? (
          <div class={`${mergedClsPrefix}-empty__description`}>
            {$slots.default ? $slots.default() : this.localizedDescription}
          </div>
        ) : null}
        {$slots.extra ? (
          <div class={`${mergedClsPrefix}-empty__extra`}>{$slots.extra()}</div>
        ) : null}
      </div>
    )
  }
})
