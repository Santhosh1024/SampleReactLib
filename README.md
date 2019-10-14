
# react-native-sample-library

## Getting started

`$ npm install react-native-sample-library --save`

### Mostly automatic installation

`$ react-native link react-native-sample-library`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSampleLibraryPackage;` to the imports at the top of the file
  - Add `new RNSampleLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sample-library'
  	project(':react-native-sample-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sample-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sample-library')
  	```


## Usage
```javascript
import RNSampleLibrary from 'react-native-sample-library';

// TODO: What to do with the module?
RNSampleLibrary;
```
  