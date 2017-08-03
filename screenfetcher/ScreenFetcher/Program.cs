using System;
using System.Drawing;
using System.Windows.Forms;
using System.IO;
using Ionic.Zip;
using System.Drawing.Imaging;
using System.Threading;

namespace ScreenFetcher
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ScreenFetcher Version 0.1.0");
            Directory.CreateDirectory("SFImage");
            int ts = 0;
            int round = 0;
            Directory.CreateDirectory(@"SFImage\" + "0");
            while (true)
            {
                if (ts == 119) {
                    CompressImage(@"SFImage\" + round.ToString(), round.ToString() + ".zip");
                    Directory.Delete(@"SFImage\" + round.ToString(), true);
                    ts = 0;
                    round++;
                    Directory.CreateDirectory(@"SFImage\" + round.ToString());
                }
                FetchAllScreen().Save(@"SFImage\" + round.ToString() + @"\" + ts.ToString() + ".jpg", ImageFormat.Jpeg);
                ts++;
                Thread.Sleep(5000);
                Application.DoEvents();
            }
        }
        static Image FetchAllScreen()
        {
            Image baseImage = new Bitmap(Screen.PrimaryScreen.Bounds.Width, Screen.PrimaryScreen.Bounds.Height);
            Graphics g = Graphics.FromImage(baseImage);
            g.CopyFromScreen(new Point(0, 0), new Point(0, 0), Screen.AllScreens[0].Bounds.Size);
            g.Dispose();
            return baseImage;
        }
        static void CompressImage(string folder, string saveName)
        {
            using (ZipFile zip = new ZipFile())
            {
                zip.AddDirectory(folder);
                zip.Save(saveName);
            };
        }
    }
}
