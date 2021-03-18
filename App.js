/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <Header style={styles.header}>
          Muddassir
        </Header>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Summmary">
            <Text style={styles.highlight}>
              Senior Web Developer specializing in front end
              development. Experienced with all stages of the
              development cycle for dynamic web projects.
              Well-versed in numerous programming languages
              including HTML5, PHP OOP, JavaScript, CSS, MySQL.
              Strong background in project management and customer
              relations.</Text>
          </Section>
          <Section title="Skill Highlights">
            <Text style={styles.highlight}>
              •	Project management
            </Text>
          </Section>
          <Section title="Experience">
            <Text style={styles.highlight}>
              Web Developer & Mobile App Developement
            </Text>
            - 08/2020 to 4/2021
          </Section>
          <Section title="Education">
            Bachelor of Science: <Text style={styles.highlight}>
              Computer Science
            </Text> 2023 <Text style={styles.highlight}>
               Fedral Urdu University of Arts Science and Technology,
            </Text> NY
          </Section>

          {/* <Section title="See Your Changes">
            <ReloadInstructions />
          </Section> */}
          {/* <Section title="Debug">
            <DebugInstructions />
          </Section> */}
          {/* <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section> */}
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: '900',
    // backgroundColor: "red",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    // fontSize: 48,

    // backgroundColor: "black"
  },
});

export default App;
