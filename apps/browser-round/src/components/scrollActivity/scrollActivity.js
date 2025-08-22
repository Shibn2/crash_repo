import React, { useRef } from "react";

export default function ScrollActivity() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const handleOnScroll = () => {
    const leftScrollTop = leftRef.current.scrollTop;
    const scrollHeight =
      leftRef.current.scrollHeight - leftRef.current.clientHeight;
    const scrollPercent = (leftScrollTop / scrollHeight) * 100;
    if (rightRef.current) {
      console.log("scrollPercent", scrollPercent);
      const rightScrollHeight =
        rightRef.current.scrollHeight - rightRef.current.clientHeight;
      const rightScrollTop = (scrollPercent * rightScrollHeight) / 100;
      rightRef.current.scrollTop = rightScrollTop;
    }
  };
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <div
        onScroll={handleOnScroll}
        ref={leftRef}
        style={{ height: "300px", width: "50%", overflow: "auto" }}
      >
        <div
          style={{ height: "1000px", width: "100%", backgroundColor: "red" }}
        ></div>
      </div>
      <div
        ref={rightRef}
        style={{ width: "50%", overflow: "auto", height: "300px" }}
      >
        <p>
          The Future of Artificial Intelligence in Computer Science Artificial
          Intelligence (AI) continues to reshape the landscape of computer
          science, pushing the boundaries of what machines can achieve. Recent
          studies highlight that AI is no longer confined to theoretical
          research; it is now a practical force driving innovation across
          industries. From machine learning algorithms optimizing data analysis
          to neural networks transforming natural language processing, AI is at
          the core of modern computational development. The increased
          availability of big data and powerful computational resources has
          accelerated the pace at which AI technologies evolve. As we look
          toward the future, experts predict that AI will become even more
          deeply integrated into everyday computer science applications. Areas
          such as cybersecurity, software engineering, and human-computer
          interaction are poised for dramatic change. Autonomous systems, such
          as self-healing networks and intelligent software agents, are expected
          to become standard. Furthermore, ethical considerations surrounding
          AI—such as bias, privacy, and accountability—will likely lead to new
          regulations and guidelines, reshaping the responsibilities of future
          computer scientists. Overall, the relationship between AI and computer
          science will continue to be mutually reinforcing. As AI tools become
          more sophisticated, they will help researchers tackle complex
          computational problems faster and more effectively. At the same time,
          advances in computer science will fuel the next generation of AI
          innovations, creating a cycle of growth and discovery. Preparing for
          this future will require interdisciplinary education, adaptable
          thinking, and a commitment to understanding both the technological and
          societal impacts of AI. Artificial Intelligence (AI) continues to
          reshape the landscape of computer science, pushing the boundaries of
          what machines can achieve. Recent studies highlight that AI is no
          longer confined to theoretical research; it is now a practical force
          driving innovation across industries. From machine learning algorithms
          optimizing data analysis to neural networks transforming natural
          language processing, AI is at the core of modern computational
          development. The increased availability of big data and powerful
          computational resources has accelerated the pace at which AI
          technologies evolve. As we look toward the future, experts predict
          that AI will become even more deeply integrated into everyday computer
          science applications. Areas such as cybersecurity, software
          engineering, and human-computer interaction are poised for dramatic
          change. Autonomous systems, such as self-healing networks and
          intelligent software agents, are expected to become standard.
          Furthermore, ethical considerations surrounding AI—such as bias,
          privacy, and accountability—will likely lead to new regulations and
          guidelines, reshaping the responsibilities of future computer
          scientists. Overall, the relationship between AI and computer science
          will continue to be mutually reinforcing. As AI tools become more
          sophisticated, they will help researchers tackle complex computational
          problems faster and more effectively. At the same time, advances in
          computer science will fuel the next generation of AI innovations,
          creating a cycle of growth and discovery. Preparing for this future
          will require interdisciplinary education, adaptable thinking, and a
          commitment to understanding both the technological and societal
          impacts of AI. One significant area of growth is the development of
          quantum computing and its potential integration with AI. Quantum
          computers, capable of processing massive amounts of information
          simultaneously, could revolutionize machine learning models and
          optimization tasks. This synergy between quantum computing and AI
          promises to unlock new possibilities, from drug discovery to climate
          modeling, enabling solutions to problems previously deemed too complex
          for classical computers. Additionally, the future of AI is expected to
          emphasize explainability and transparency. As AI systems become more
          involved in critical decision-making processes—such as medical
          diagnoses, financial predictions, and legal judgments—there will be an
          increased demand for systems that can clearly explain their reasoning.
          This trend is leading to the rise of fields like Explainable AI (XAI),
          which aims to make AI systems more understandable and trustworthy for
          human users. Another exciting development is the evolution of AI-human
          collaboration. Rather than replacing human workers, AI is anticipated
          to enhance human capabilities through collaborative systems. These
          "co-bots" or collaborative robots could assist professionals in areas
          like education, healthcare, and engineering, handling repetitive tasks
          and providing insights that enable humans to focus on creative and
          strategic aspects of their work. In conclusion, AI's impact on the
          future of computer science will be profound and multifaceted. The
          ongoing advancements will not only drive technical innovation but also
          pose important questions about ethics, society, and human values. As
          AI continues to grow more powerful, it will be essential for computer
          scientists, policymakers, and the broader public to work together in
          shaping a future where AI technologies are developed and deployed
          responsibly.
        </p>
      </div>
    </div>
  );
}
