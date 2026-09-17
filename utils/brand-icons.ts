/**
 * Iconos de Marca (Brand Icons) eliminados de Lucide v1
 *
 * Lucide 1.x eliminó todos los brand icons de su catálogo
 * (Github, Linkedin, Twitter, etc.). Este módulo los replica
 * como componentes Vue con la misma API de props de Lucide
 * (size, color, stroke-width) y herencia de atributos (class).
 */
import { defineComponent, h, type PropType } from 'vue';

const baseAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'aria-hidden': 'true',
} as const;

const iconProps = {
  size: { type: [Number, String] as PropType<number | string>, default: 24 },
  color: { type: String, default: 'currentColor' },
  strokeWidth: { type: [Number, String] as PropType<number | string>, default: 2 },
};

export const Github = defineComponent({
  name: 'GithubIcon',
  props: iconProps,
  setup(props, { attrs }) {
    return () =>
      h(
        'svg',
        {
          ...baseAttrs,
          width: props.size,
          height: props.size,
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          ...attrs,
        },
        [
          h('path', {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
          }),
          h('path', { d: 'M9 18c-4.51 2-5-2-7-2' }),
        ]
      );
  },
});

export const Linkedin = defineComponent({
  name: 'LinkedinIcon',
  props: iconProps,
  setup(props, { attrs }) {
    return () =>
      h(
        'svg',
        {
          ...baseAttrs,
          width: props.size,
          height: props.size,
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          ...attrs,
        },
        [
          h('path', {
            d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
          }),
          h('rect', { x: '2', y: '9', width: '4', height: '12' }),
          h('circle', { cx: '4', cy: '4', r: '2' }),
        ]
      );
  },
});