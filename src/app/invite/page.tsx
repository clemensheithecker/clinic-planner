import { Heading, Text } from "@/_components/ui";

import InviteForm from "./components/invite-form";

const ORGANIZATION_NAME = "Reitsportkonzepte Völker";

export default function InvitePage() {
  return (
    <div className="flex min-h-screen items-start justify-center gap-16 px-4 py-8 font-[family-name:var(--font-geist-sans)] sm:items-center sm:p-20">
      <main className="bg-background row-start-2 flex max-w-4xl flex-col items-center gap-[32px] rounded-2xl px-4 py-6 shadow-sm sm:items-start sm:p-6">
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
