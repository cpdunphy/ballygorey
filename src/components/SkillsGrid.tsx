import { Grid, Card, Text, Avatar } from "@nextui-org/react";
export default function SkillsGrid() {
  const MockItem = ({ text }: { text: string }) => {
    return (
      <Card
        isHoverable
        variant="bordered">
        <Card.Header>
          <Avatar
            squared
            // align="center"
            text={text[0]}
          />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs" }}>
                {text}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
      </Card>
    );
  };

  const skillsLangs = ["Swift", "Java", "Python", "C", "MATLAB", "JS", "TS", "HTML/CSS"];
  const skillsFrameworks = ["React", "SwiftUI", "Figma", "Flutter", "3D Printing", "GCP/Firebase", "GitHub/GitLab", "Agile Methodologies"];
  return (
    <>
      <Text h3>Skills - Languages</Text>
      <Grid.Container
        gap={2}
        justify="center">
        {skillsLangs.map((item, index) => (
          <Grid key={index}>
            <MockItem text={item} />
          </Grid>
        ))}
      </Grid.Container>
      <Text h3>Skills - Framework</Text>
      <Grid.Container
        gap={2}
        justify="center">
        {skillsFrameworks.map((item, index) => (
          <Grid key={index}>
            <MockItem text={item} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
