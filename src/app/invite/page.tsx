import { Heading } from "@/_components/heading";
import { Text } from "@/_components/text";

import InviteForm from "./InviteForm";

const ORGANIZATION_NAME = "Reitsportkonzepte Völker";

export default function InvitePage() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Heading>Dein Reitabzeichentraining</Heading>
        <Text>
          Freu dich auf ein einzigartiges Trainingserlebnis bei{" "}
          {ORGANIZATION_NAME}. Bitte gib uns ein paar Informationen für die
          Vorbereitung deines Abzeichens.
        </Text>
        <InviteForm />
      </main>
    </div>
  );
}
