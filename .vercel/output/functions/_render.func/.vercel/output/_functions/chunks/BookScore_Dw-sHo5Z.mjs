import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_CLNA4DDh.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './setup_DoP-ohVq.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "C:/Users/Gus/Desktop/portafolio/astro-5-dev-books-main/src/components/BookScore.astro", void 0);

const $$file = "C:/Users/Gus/Desktop/portafolio/astro-5-dev-books-main/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
