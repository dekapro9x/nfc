# bash scripts/run-debug-uuid-ios.sh
npx react-native start
cd ios && rm -rf build && pod cache clean --all && pod install && cd ..
npx react-native run-ios --udid 4d5fb118c759c9bc33987851b2d5920e49a8df17