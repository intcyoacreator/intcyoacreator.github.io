// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::Manager;
// // Create the command:
// // This command must be async so that it doesn't run on the main thread.
// #[tauri::command]
// async fn close_splashscreen(window: tauri::Window) {
//     // Close splashscreen
//     if let Some(splashscreen) = window.get_window("splashscreen") {
//         splashscreen.close().unwrap();
//     }
//     // Show main window
//     window.get_window("main").unwrap().show().unwrap();
// }

/*
,
      {
        "fullscreen": false,
        "height": 640,
        "width": 840,
        "maximized": true,
        "resizable": true,
        "title": "Interactive CYOA Creator 2 – Loading",
        "url": "splashscreen.html",
        "label": "splashscreen"
      }
*/

fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![close_splashscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
