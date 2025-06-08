"use client";

import { createContact } from "@/api/contact.api";
import { Container } from "@/components/common/Container";
import { AnimatedButton } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { IContact } from "@/types/contact.types";
import { ChangeEvent, useState } from "react";

export const ContactUsPageFormFields = () => {
  const [values, setValues] = useState<IContact>({
    email: "",
    message: "",
    name: "",
    phone: "",
  });

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setValues((v) => ({ ...v, [name]: value }));
  }
  async function handleOnSubmit() {
    try {
      const body = {
        ...values,
      };
      await createContact(body);
    } catch (error) {
      console.log("CREATE CONTACT ERROR", error);
    }
  }

  return (
    <div className="w-full rounded-b bg-accent-foreground py-4 pb-48">
      <Container>
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-row items-center gap-2 max-md:flex-col max-md:items-start">
            <Text
              size={"sm"}
              weight={"semibold"}
              className="inline-flex text-black"
            >
              Hello! My name is
            </Text>
            <Input
              name="name"
              value={values.name}
              onChange={handleOnChange}
              placeholder="your full name"
              variant={"standard"}
              size={"small"}
              className="flex-1"
            />
            <br />
            <Text
              size={"sm"}
              weight={"semibold"}
              className="inline-flex text-black"
            >
              and I want to discuss a potential project.
            </Text>
          </div>
          <div className="flex w-full flex-row items-center gap-2 max-md:flex-col max-md:items-start">
            <Text
              size={"sm"}
              weight={"semibold"}
              className="inline-flex text-black"
            >
              You can email me at
            </Text>
            <Input
              name="email"
              value={values.email}
              onChange={handleOnChange}
              placeholder="your@email.com"
              variant={"standard"}
              size={"small"}
              className="flex-1"
            />
            <Text
              size={"sm"}
              weight={"semibold"}
              className="inline-flex text-black"
            >
              or reach me on
            </Text>
            <Input
              name="phone"
              value={values.phone}
              onChange={handleOnChange}
              placeholder="your phone"
              variant={"standard"}
              size={"small"}
              className="flex-1"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2 max-md:flex-col max-md:items-start">
            <Text
              size={"sm"}
              weight={"semibold"}
              className="inline-flex text-black"
            >
              Here are some details about my project:
            </Text>
            <Input
              name="message"
              value={values.message}
              onChange={handleOnChange}
              placeholder="my project is about..."
              variant={"standard"}
              size={"small"}
              className="w-full"
            />
          </div>
          <div className="mt-4 flex w-full items-center justify-center">
            <AnimatedButton onClick={handleOnSubmit}>
              Send Request
            </AnimatedButton>
          </div>
        </div>
      </Container>
    </div>
  );
};
