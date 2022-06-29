package io.github.jmatsu.pms

import android.util.Log

class Sample {

    fun lintFatal() {
        // fatals won't be shown in the console log
        Log.d("tag", "fatal due to LogConditional")
    }

    @Deprecated(message = "show a warning", level = DeprecationLevel.WARNING)
    fun showWarning() {

    }

    @Deprecated(message = "show an error", level = DeprecationLevel.ERROR)
    fun showError() {

    }
}