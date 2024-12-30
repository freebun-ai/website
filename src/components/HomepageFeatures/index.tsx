import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast AI Smart Translator',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          <a href="/docs/Fast-AI-JSON-Translator/features">Fast AI Smart Translator</a> is a tool that translates
          JSON objects from one language to another using AI. It uses OPEN AI Chat GPT, Google Gemini, Anthropic Claude or Deepseek to perform the translation. It can remember already translated keys and values so it will only translate the differences.
          See documentation for more details <a href="/docs/Fast-AI-JSON-Translator/features">here</a>
      </>
    ),
  },
  {
    title: 'Fast AI Transcriber',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Coming soon. Fast AI Transcriber is a tool that transcribes audio files to text using AI. It uses OPEN AI to perform the transcription.
      </>
    ),
  },
  {
    title: 'Fast AI Image Generator',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Coming soon. Fast AI Image Generator is a tool that generates images using AI.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
