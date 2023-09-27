import React from "react";
import { Section, Form } from "../components";

const HomeContactContainer = () => {
  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Contact Us</Section.SubTitle>
              <Section.Text>
                Drop us a line! We’ll set up a time to chat over the phone or
                in-person to know more about your Real estate needs. All primary
                conferences are free of charge.
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>We Will Get In Touch</Section.SubTitle>
                  <Section.Text>Let's talk about what you want</Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>
                    Get Instant Support From Us
                  </Section.SubTitle>
                  <Section.Text>
                    Need assistance? please fill the form
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              <Form>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Name" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Email" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Your Phone Number" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.TextArea
                    placeholder="Your Message"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></Form.TextArea>
                </Form.FormGroup>

                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Send Message" />
                </Form.FormGroup>
              </Form>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
