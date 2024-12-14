The random crashes were eventually resolved by taking a multi-pronged approach. There was no single fix but rather the combination of these steps that appeared to help stabilize the development server.

1. **Check Node.js Version:** Ensure that the Node.js and npm versions are updated to their latest stable versions.  Outdated versions can cause compatibility problems.
2. **Clean the Project:** Delete the `node_modules` folder and `package-lock.json` (or `yarn.lock`). Then reinstall dependencies using `npm install` (or `yarn install`).  Corrupted dependencies can lead to unexpected behavior.
3. **Check Expo CLI Version:** Make sure the expo-cli package is also up to date. Run `expo upgrade` to update it to the latest version. 
4. **Check System Resources:** Monitor system resource usage (CPU, memory) while running Expo CLI.  If resources are consistently maxed out, consider reducing the workload or upgrading your system's specifications. 
5. **Restart Computer:** The simple act of restarting the computer sometimes solved the problem. It resets system processes and resolves temporary resource issues.
6. **Expo Doctor:** Run `expo doctor` to check for any configuration issues. This command can identify many potential problems. 
7. **Create new Project:** In extreme cases, it might be necessary to start from scratch. Create a new Expo project and gradually transfer the code to see if the problem persists.